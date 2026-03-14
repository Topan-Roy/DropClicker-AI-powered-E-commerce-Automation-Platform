


'use client'
import { Package, Search, Filter } from 'lucide-react';

export default function OrdersToolbar({ searchQuery, onSearch, onFilterToggle }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white rounded-xl border border-gray-100 px-4 py-3 shadow-sm">

      {/* Left side: Package status badge */}
      <div className="flex items-center justify-between sm:justify-start gap-4">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg text-blue-600 flex-shrink-0">
          <Package size={16} />
          <span className="font-bold text-sm">All</span>
        </div>
        
        {/* Mobile-only filter button */}
        <button
          onClick={onFilterToggle}
          className="sm:hidden flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
        >
          <Filter size={15} /> Filter
        </button>
      </div>

      {/* Right side group: Search + Filter (on sm+ screens) */}
      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        {/* Search Input */}
        <div className="relative w-full sm:w-64 lg:w-80 group">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            size={16}
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search Product"
            className="w-full bg-gray-50 rounded-xl border border-transparent pl-9 pr-4 py-2 text-sm outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
          />
        </div>

        {/* Desktop-only filter button */}
        <button
          onClick={onFilterToggle}
          className="hidden sm:flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95 flex-shrink-0"
        >
          <Filter size={16} /> Filter
        </button>
      </div>
    </div>
  );
}