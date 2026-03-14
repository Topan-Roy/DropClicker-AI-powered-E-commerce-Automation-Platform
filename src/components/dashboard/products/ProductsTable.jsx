
'use client';
import { useState } from 'react';
import ProductStockBadge from './ProductStockBadge';
import ProductActionMenu from './ProductActionMenu';

const StatusBadge = ({ status }) => (
  <div className="flex items-center gap-1.5">
    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${status.toLowerCase() === 'active' ? 'bg-green-500' : 'bg-gray-400'}`} />
    <span className={`text-sm font-semibold ${status.toLowerCase() === 'active' ? 'text-green-600' : 'text-gray-500'}`}>
      {status}
    </span>
  </div>
);

export default function ProductsTable({ data }) {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <>
      {/* ── Desktop / Tablet table (md+) ── */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse min-w-[700px]">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-100">
              {['Product', 'Stats', 'Stock', 'Cost', 'Price', 'Margin', 'Category', 'Action'].map((h, i) => (
                <th
                  key={i}
                  className={`px-5 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider ${h === 'Action' ? 'text-right pr-6' : ''}`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {data.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <img src={product.image} alt="" className="w-10 h-10 rounded-lg border border-gray-100 object-cover flex-shrink-0" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-gray-900 leading-tight truncate max-w-[180px]">{product.name}</p>
                      <p className="text-xs font-semibold text-gray-400 mt-0.5">{product.sku}</p>
                    </div>
                  </div>
                </td>
                <td className="px-5 py-4"><StatusBadge status={product.status} /></td>
                <td className="px-5 py-4"><ProductStockBadge stock={product.stock} /></td>
                <td className="px-5 py-4 text-sm font-bold text-gray-700">£{product.cost.toFixed(2)}</td>
                <td className="px-5 py-4 text-sm font-bold text-gray-700">£{product.price.toFixed(2)}</td>
                <td className="px-5 py-4">
                  <span className="bg-green-50 text-green-600 px-2.5 py-1 rounded-lg text-xs font-bold">{product.margin}%</span>
                </td>
                <td className="px-5 py-4 text-sm font-bold text-gray-700">{product.category}</td>
                <td className="px-5 py-4 text-right pr-6 relative">
                  <ProductActionMenu />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile card list (< md) ── */}
      <div className="md:hidden space-y-4">
        {data.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 active:bg-gray-50 transition-colors">
            {/* Header: Image + Name + Action Menu */}
            <div className="flex items-start gap-4">
              <img
                src={product.image}
                alt=""
                className="w-14 h-14 rounded-xl border border-gray-100 object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-bold text-gray-900 leading-tight truncate pr-2">{product.name}</p>
                  <ProductActionMenu />
                </div>
                <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-wide">{product.sku}</p>
                <div className="flex items-center gap-2 mt-3">
                  <StatusBadge status={product.status} />
                  <ProductStockBadge stock={product.stock} />
                </div>
              </div>
            </div>

            {/* Price Info Grid */}
            <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-gray-50">
              <div className="bg-gray-50/50 rounded-xl p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Pricing</p>
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <p className="text-[10px] font-semibold text-gray-500">Cost: £{product.cost.toFixed(2)}</p>
                    <p className="text-xs font-bold text-gray-900">Retail: £{product.price.toFixed(2)}</p>
                  </div>
                  <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-lg text-[10px] font-bold">
                    {product.margin}%
                  </div>
                </div>
              </div>
              <div className="bg-gray-50/50 rounded-xl p-3">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Category</p>
                <p className="text-xs font-bold text-gray-700 truncate">{product.category}</p>
                <p className="text-[10px] font-medium text-gray-400 mt-1">EcomBuilds</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
