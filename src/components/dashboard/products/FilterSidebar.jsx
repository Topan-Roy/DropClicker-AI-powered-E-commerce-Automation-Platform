'use client';
import {
  supplierOptions,
  statusOptions,
  categoryOptions,
  stockStatusOptions,
  priceRangeOptions
} from '@/data/productsData';

export default function FilterSidebar({ isOpen, filters, onFilterChange }) {
  if (!isOpen) return null;

  const stockOptions = stockStatusOptions;
  const priceOptions = priceRangeOptions;

  return (
    <div className="absolute right-0 sm:right-[150px] top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 p-4 z-50 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
      {[
        { key: 'supplier', label: 'Supplier', options: supplierOptions },
        { key: 'status', label: 'Status', options: statusOptions },
        { key: 'category', label: 'Category', options: categoryOptions },
        { key: 'stockStatus', label: 'Stock Status', options: stockOptions },
        { key: 'priceRange', label: 'Price Range', options: priceOptions },
      ].map(({ key, label, options }) => (
        <div key={key}>
          <label className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-1.5 block">
            {label}
          </label>
          <select
            value={filters[key]}
            onChange={e => onFilterChange(key, e.target.value)}
            className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm text-gray-700 bg-white appearance-none cursor-pointer focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-50 transition-all"
          >
            {options.map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
      ))}
    </div>
  );
}