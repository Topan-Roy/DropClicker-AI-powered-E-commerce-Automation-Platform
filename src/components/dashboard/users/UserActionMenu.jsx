'use client';
import { useState, useRef, useEffect } from 'react';
import { MoreVertical, Eye, Trash2, Shield } from 'lucide-react';

export default function UserActionMenu({ user, onView, onDelete, onUpdateRole }) {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmConfig, setConfirmConfig] = useState(null); // { type: 'role' | 'delete', title: string, message: string, onConfirm: () => void }
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleView = () => {
    setIsOpen(false);
    onView?.(user);
  };

  const handleToggleRole = () => {
    setIsOpen(false);
    const newRole = user.role?.toLowerCase() === 'admin' ? 'user' : 'admin';
    setConfirmConfig({
      type: 'role',
      title: newRole === 'admin' ? 'Promote to Admin' : 'Demote to User',
      message: `Are you sure you want to make "${user?.fullName || user?.name}" an ${newRole === 'admin' ? 'Admin' : 'User'}?`,
      onConfirm: () => onUpdateRole?.(user?._id || user?.id, newRole),
    });
  };

  const handleDelete = () => {
    setIsOpen(false);
    setConfirmConfig({
      type: 'delete',
      title: 'Delete User',
      message: `Are you sure you want to delete "${user?.fullName || user?.name}"? This action cannot be undone.`,
      onConfirm: () => onDelete?.(user?._id || user?.id),
    });
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100 transition-colors"
      >
        <MoreVertical size={18} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl border border-gray-100 shadow-xl z-50 overflow-hidden">
          <button
            onClick={handleView}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Eye size={14} className="text-blue-500" /> View
          </button>
          <div className="border-t border-gray-50" />
          <button
            onClick={handleToggleRole}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <Shield size={14} className="text-purple-500" /> {user.role?.toLowerCase() === 'admin' ? 'Make User' : 'Make Admin'}
          </button>
          <div className="border-t border-gray-50" />
          <button
            onClick={handleDelete}
            className="flex w-full items-center gap-2 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
          >
            <Trash2 size={14} /> Delete
          </button>
        </div>
      )}

      {/* Custom Confirmation Modal */}
      {confirmConfig && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-4 text-center border border-gray-100 animate-in fade-in zoom-in duration-200">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 ${confirmConfig.type === 'delete' ? 'bg-red-50 text-red-600' : 'bg-purple-50 text-purple-600'}`}>
              {confirmConfig.type === 'delete' ? <Trash2 size={24} /> : <Shield size={24} />}
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">{confirmConfig.title}</h3>
            <p className="text-sm text-gray-500 mb-6">{confirmConfig.message}</p>
            <div className="flex gap-3 justify-center">
              <button
                onClick={() => setConfirmConfig(null)}
                className="px-5 py-2.5 text-sm font-bold text-gray-500 bg-gray-100 hover:bg-gray-200 rounded-xl transition-colors min-w-[80px]"
              >
                No
              </button>
              <button
                onClick={() => {
                  confirmConfig.onConfirm();
                  setConfirmConfig(null);
                }}
                className={`px-5 py-2.5 text-sm font-bold text-white rounded-xl transition-colors min-w-[80px] ${confirmConfig.type === 'delete' ? 'bg-red-600 hover:bg-red-700' : 'bg-purple-600 hover:bg-purple-700'}`}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}