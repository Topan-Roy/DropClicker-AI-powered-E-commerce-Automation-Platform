'use client'
import { Package, Search, Filter } from 'lucide-react';
import FilterDropdown from './FilterDropdown';

export default function CollectionsToolbar({ searchQuery, onSearch, onFilterToggle, showFilter, filters, onFilterChange }) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4 bg-white rounded-2xl border border-gray-100 px-4 py-4 sm:py-3 shadow-sm">
      <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 rounded-lg text-blue-600 self-start sm:self-auto">
        <Package size={18} />
        <span className="font-bold text-sm">All</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto flex-1 justify-end">
        <div className="relative w-full sm:max-w-md group">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search Product"
            className="w-full bg-gray-50/50 rounded-xl border border-gray-100 pl-10 pr-4 py-2.5 text-sm outline-none focus:bg-white focus:border-blue-400 focus:ring-4 focus:ring-blue-50/50 transition-all placeholder:text-gray-400"
          />
        </div>

        <div className="relative w-full sm:w-auto">
          <button
            onClick={onFilterToggle}
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95 shadow-sm"
          >
            <Filter size={16} /> Filter
          </button>
          <FilterDropdown isOpen={showFilter} filters={filters} onFilterChange={onFilterChange} />
        </div>
      </div>
    </div>
  );
}