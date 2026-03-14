'use client'
import { statusFilterOptions, typeFilterOptions } from '@/data/collectionsData';

export default function FilterDropdown({ isOpen, filters, onFilterChange }) {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-12 w-52 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 space-y-4 z-40 animate-in fade-in slide-in-from-top-2 duration-200">
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Status</label>
        <select 
          value={filters.status}
          onChange={(e) => onFilterChange('status', e.target.value)}
          className="w-full bg-gray-50 border border-gray-100 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-blue-400 transition-all cursor-pointer"
        >
          {statusFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Type</label>
        <select 
          value={filters.type}
          onChange={(e) => onFilterChange('type', e.target.value)}
          className="w-full bg-gray-50 border border-gray-100 rounded-lg px-2 py-1.5 text-sm outline-none focus:border-blue-400 transition-all cursor-pointer"
        >
          {typeFilterOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
      </div>
    </div>
  );
}