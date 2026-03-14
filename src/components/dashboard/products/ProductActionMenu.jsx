'use client';
import { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

export default function ProductActionMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
      >
        <MoreVertical size={18} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-1 w-44 bg-white rounded-2xl border border-gray-100 shadow-xl z-50 overflow-hidden py-1">
          <button className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
            Edit
          </button>
          <button className="w-full text-left px-4 py-3 text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors">
            Deactivate
          </button>
          <button className="w-full text-left px-4 py-3 text-sm font-semibold text-red-500 hover:bg-red-50 transition-colors">
            Delete
          </button>
        </div>
      )}
    </div>
  );
}