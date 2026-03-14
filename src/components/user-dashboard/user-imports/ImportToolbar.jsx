'use client';
import { LayoutGrid, Search } from 'lucide-react';

export default function ImportToolbar({ searchQuery, onSearch, count }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl px-4 py-3
    flex items-center justify-between shadow-sm">
      {/* Left */}
      <div className="flex items-center gap-2">
        <div className="w-9 h-9 bg-blue-50 rounded-xl flex items-center
        justify-center text-blue-600">
          <LayoutGrid size={18} />
        </div>
        <span className="font-bold text-sm text-gray-900">All</span>
        <span className="text-xs text-gray-400">({count})</span>
      </div>
      {/* Right: Search */}
      <div className="relative">
        <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2
        text-gray-400" />
        <input type="text" value={searchQuery}
          onChange={e => onSearch(e.target.value)}
          placeholder="Search Product"
          className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-100
          rounded-xl text-sm w-52 focus:outline-none focus:ring-2
          focus:ring-blue-50 focus:border-blue-300 transition-all" />
      </div>
    </div>
  );
}