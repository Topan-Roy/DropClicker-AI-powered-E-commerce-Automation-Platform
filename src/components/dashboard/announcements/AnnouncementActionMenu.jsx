'use client'
import { useState, useRef, useEffect } from 'react';
import { MoreVertical } from 'lucide-react';

export default function AnnouncementActionMenu({ onDelete }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer">
        <MoreVertical size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 bg-white rounded-xl border border-gray-100 shadow-lg z-40 py-1 animate-in fade-in zoom-in-95 duration-100">
          <button
            className="flex w-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 text-left cursor-pointer"
            onClick={() => { setIsOpen(false); /* TODO: onEdit() */ }}
          >
            Edit
          </button>
          <button
            className="flex w-full px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50 text-left cursor-pointer"
            onClick={() => { setIsOpen(false); onDelete(); }}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}