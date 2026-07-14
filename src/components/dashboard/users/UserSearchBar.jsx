'use client';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function UserSearchBar({ value, onChange }) {
  return (
    <div className="flex items-center justify-between mt-6 mb-4">
      <div className="relative w-72 group">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
        <input
          type="text"
          placeholder="Search users"
          value={value || ''}
          onChange={(e) => onChange?.(e.target.value)}
          className="w-full bg-white rounded-full border border-gray-200 pl-11 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 transition-all shadow-sm"
        />
      </div>

      <button className="h-10 w-10 flex items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-50 transition-colors shadow-sm">
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
}