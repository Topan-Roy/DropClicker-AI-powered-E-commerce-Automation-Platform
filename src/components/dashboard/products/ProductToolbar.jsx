'use client';
import { Package, Search, Filter, ArrowUpDown } from 'lucide-react';

export default function ProductToolbar({ searchQuery, onSearch, onFilterToggle, onSortToggle, sortLabel }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4 bg-white rounded-2xl border border-gray-100 px-4 py-3 shadow-sm">

      {/* Left: "All" badge - always left/top */}
      <div className="flex items-center justify-between lg:justify-start">
        <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-xl text-blue-600 flex-shrink-0">
          <Package size={16} />
          <span className="font-bold text-sm">All</span>
        </div>

        {/* Simple count on mobile maybe? (Optional) */}
        <span className="lg:hidden text-xs font-bold text-gray-400">Total Products: 85,420</span>
      </div>

      <div className="hidden lg:block flex-1" />

      {/* Right side: Search + Filter + Sort */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        {/* Search Input */}
        <div className="relative flex-1 sm:w-64">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search Product"
            className="w-full bg-gray-50 border border-gray-100 rounded-full pl-9 pr-4 py-2 text-sm outline-none focus:bg-white focus:border-blue-300 focus:ring-2 focus:ring-blue-50 transition-all font-medium"
          />
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={onFilterToggle}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
          >
            <Filter size={15} /> Filter
          </button>
          <button
            onClick={onSortToggle}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-all active:scale-95 whitespace-nowrap"
          >
            <ArrowUpDown size={15} />
            <span>{sortLabel || 'Newest First'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
