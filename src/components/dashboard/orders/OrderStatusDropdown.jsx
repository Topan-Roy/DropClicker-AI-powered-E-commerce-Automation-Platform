'use client'
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { orderStatusOptions } from '@/data/ordersData';

export default function OrderStatusDropdown({ currentStatus, onStatusChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const close = (e) => { if (menuRef.current && !menuRef.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-1.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all"
      >
        {currentStatus} <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl border border-gray-100 shadow-xl z-50 overflow-hidden py-1">
          {orderStatusOptions.map(opt => (
            <button 
              key={opt}
              onClick={() => { onStatusChange(opt); setIsOpen(false); }}
              className="flex w-full items-center justify-between px-4 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50"
            >
              {opt}
              {currentStatus === opt && <Check size={14} className="text-blue-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}