'use client';
import { Check } from 'lucide-react';
import { sortOptions } from '@/data/productsData';

export default function SortDropdown({ isOpen, currentSort, onSortChange }) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-xl border border-gray-100 py-1.5 z-50">
      {sortOptions.map((option) => (
        <button
          key={option.value}
          onClick={() => onSortChange(option.value)}
          className="w-full flex items-center justify-between px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors"
        >
          <span className={currentSort === option.value
            ? 'font-semibold text-gray-900'
            : 'font-medium text-gray-600'}>
            {option.label}
          </span>
          {currentSort === option.value && (
            <Check size={15} className="text-gray-800" strokeWidth={2.5} />
          )}
        </button>
      ))}
    </div>
  );
}