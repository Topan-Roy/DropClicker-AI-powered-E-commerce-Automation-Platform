'use client'
import { MoreVertical } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

export default function CollectionActionMenu() {
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
      <button onClick={() => setIsOpen(!isOpen)} className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
        <MoreVertical size={20} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-gray-100 shadow-xl z-50 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
          <button className="flex w-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">Edit</button>
          <button className="flex w-full px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50">Manage Products</button>
          <button className="flex w-full px-4 py-2.5 text-sm font-semibold text-red-500 hover:bg-red-50">Delete</button>
        </div>
      )}
    </div>
  );
}