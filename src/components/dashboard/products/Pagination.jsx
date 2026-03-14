

'use client';
import { ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { pageSizeOptions } from '@/data/productsData';
import { useState, useRef, useEffect } from 'react';

export default function Pagination({ currentPage, totalPages, pageSize, onPageChange, onPageSizeChange }) {
  const [showSizeOptions, setShowSizeOptions] = useState(false);
  const sizeRef = useRef(null);

  useEffect(() => {
    function clickOutside(e) {
      if (sizeRef.current && !sizeRef.current.contains(e.target)) setShowSizeOptions(false);
    }
    document.addEventListener('mousedown', clickOutside);
    return () => document.removeEventListener('mousedown', clickOutside);
  }, []);

  return (
    <div className="flex items-center justify-end gap-4 pt-2">
      {/* Page size picker */}
      <div className="relative flex items-center gap-2" ref={sizeRef}>
        <button
          onClick={() => setShowSizeOptions(!showSizeOptions)}
          className="flex items-center gap-1.5 bg-white border border-gray-200 rounded-xl px-3 py-1.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors min-w-[56px] justify-between shadow-sm active:scale-95"
        >
          {String(pageSize).padStart(2, '0')}
          <ChevronDown size={14} className="text-gray-400" />
        </button>
        {showSizeOptions && (
          <div className="absolute bottom-full mb-2 left-0 w-20 bg-white border border-gray-100 rounded-xl shadow-xl overflow-hidden z-50">
            {pageSizeOptions.map(size => (
              <button
                key={size}
                onClick={() => { onPageSizeChange(size); setShowSizeOptions(false); }}
                className={`w-full text-left px-4 py-2 text-sm font-bold hover:bg-gray-50 border-b border-gray-50 last:border-0 transition-colors ${size === pageSize ? 'text-blue-600' : 'text-gray-700'}`}
              >
                {size}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Page info */}
      <p className="text-sm font-medium text-gray-400 whitespace-nowrap">
        Page{' '}
        <span className="font-bold text-gray-900">{String(currentPage).padStart(2, '0')}</span>
        {' '}Of{' '}
        <span className="font-bold text-gray-900">{totalPages}</span>
      </p>

      {/* Prev / Next arrows */}
      <div className="flex items-center gap-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 disabled:opacity-40 hover:bg-gray-50 transition-colors active:scale-90"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 disabled:opacity-40 hover:bg-gray-50 transition-colors active:scale-90"
        >
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
}
