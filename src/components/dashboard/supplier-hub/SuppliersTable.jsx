'use client';
import { RefreshCw, Search, SlidersHorizontal, Plus } from 'lucide-react';

const SupplierStatusBadge = ({ status }) => {
  const isActive = status === 'Active';
  return (
    <div className="flex items-center gap-1.5 px-3 py-1">
      <div className={`w-2 h-2 rounded-full ${isActive ? 'bg-blue-500' : 'bg-gray-400'}`} />
      <span className={`text-sm font-semibold ${isActive ? 'text-blue-500' : 'text-gray-500'}`}>{status}</span>
    </div>
  );
};

export default function SuppliersTable({ data, onAddSupplier }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col">
      {/* Table Toolbar */}
      <div className="px-4 py-4 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="relative flex-1 sm:w-80">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Order# or Customer"
              className="w-full bg-white rounded-2xl border border-gray-200 pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-300 shadow-xs transition-all"
            />
          </div>
          <button className="w-10 h-10 shrink-0 rounded-full border border-gray-200 bg-white text-gray-500 flex items-center justify-center hover:bg-gray-50 transition-colors shadow-sm">
            <SlidersHorizontal size={16} />
          </button>
        </div>

        <button
          onClick={onAddSupplier}
          className="w-full sm:w-auto bg-blue-600 text-white rounded-xl px-4 py-2.5 text-sm font-bold flex items-center justify-center gap-2 hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95"
        >
          <Plus size={16} /> Add Suppler
        </button>
      </div>

      <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-50/30 border-b border-gray-100">
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500">Suppliers</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-center">Products</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-center">Status</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-center">In Stock</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-center">Low Stock</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-center">Value</th>
              <th className="px-6 py-3.5 text-xs font-semibold text-gray-500 text-right pr-6">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((supplier) => (
              <tr key={supplier.id} className="hover:bg-gray-50/20 transition-colors">
                <td className="px-6 py-3.5">
                  <div className="flex items-center gap-3">
                    <img src={supplier.avatar} alt="" className="w-9 h-9 rounded-full border border-gray-100 bg-gray-50" />
                    <p className="text-sm font-semibold text-gray-900">{supplier.name}</p>
                  </div>
                </td>
                <td className="px-6 py-3.5 text-center text-sm text-gray-700">{supplier.products}</td>
                <td className="px-6 py-3.5 flex justify-center"><SupplierStatusBadge status={supplier.status} /></td>
                <td className="px-6 py-3.5 text-center text-sm text-gray-700">{supplier.inStock}</td>
                <td className="px-6 py-3.5 text-center text-sm text-gray-700">{supplier.lowStock}</td>
                <td className="px-6 py-3.5 text-center text-sm text-gray-700">{supplier.value}</td>
                <td className="px-6 py-3.5 text-right pr-6">
                  <button className="flex items-center gap-1.5 ml-auto px-3.5 py-1.5 rounded-xl border border-gray-200 text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95 shadow-sm">
                    <RefreshCw size={14} className="text-gray-500" /> Sync
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}