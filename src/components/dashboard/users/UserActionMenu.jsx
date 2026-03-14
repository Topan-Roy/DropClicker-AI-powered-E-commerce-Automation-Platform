'use client';
import { useState, useRef, useEffect } from 'react';
import { MoreVertical, Eye, Edit2, Trash2 } from 'lucide-react';

export default function UserActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="text-gray-400 hover:text-gray-600 p-1">
        <MoreVertical size={20} />
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg border border-gray-100 shadow-xl z-50 overflow-hidden">
          {/* TODO: Wire these buttons to API endpoints */}
          <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <Eye size={14} /> View
          </button>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
            <Edit2 size={14} /> Edit
          </button>
          <button className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50">
            <Trash2 size={14} /> Delete
          </button>
        </div>
      )}
    </div>
  );
}