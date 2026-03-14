'use client';

import { useState } from 'react';

import { Search, ChevronUp, ChevronDown, X, Star, Clock } from 'lucide-react';

import DualRangeSlider from './DualRangeSlider';



export default function FilterPanel({ filters, onApply, onReset, onClose }) {

  const [local, setLocal] = useState({ ...filters });

  const [open, setOpen] = useState({ price: true, rating: true, stock: true, supplier: false });



  const toggle = (key) => setOpen(prev => ({ ...prev, [key]: !prev[key] }));



  return (

    <aside className="w-[260px] bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex-shrink-0 lg:sticky lg:top-4 max-h-[95vh] overflow-y-auto scrollbar-hide select-none">

      {/* Header */}
      <div className="flex items-center justify-between mb-5 px-1">
        <span className="text-base font-bold text-gray-900">Filters</span>
        <button onClick={onClose} className="text-gray-400 hover:bg-gray-100 p-1.5 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>

      {/* Search & History */}
      <div className="space-y-3 mb-5 px-1">
        <div className="relative">
          <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search products"
            className="w-full pl-10 pr-3 py-2.5 bg-white border border-gray-200 rounded-xl text-sm placeholder:text-gray-400 focus:border-blue-300 outline-none transition-all"
          />
        </div>
        <div className="flex items-center gap-2 text-gray-600 bg-gray-100 px-3 py-1.5 rounded-full w-fit cursor-pointer hover:bg-gray-200 transition-colors">
          <Clock size={12} className="text-gray-500" />
          <span className="text-xs font-medium">Men Cloths</span>
        </div>
      </div>

      <div className="space-y-3">
        {/* Price Section */}
        <div className={`rounded-2xl transition-all overflow-hidden ${open.price ? 'bg-blue-50/60' : ''}`}>
          <button
            onClick={() => toggle('price')}
            className="flex items-center justify-between w-full px-4 py-3.5 text-gray-900"
          >
            <div className="text-left">
              <span className="text-sm font-bold block">Price Range</span>
              {open.price && <span className="text-xs text-gray-400 font-normal mt-0.5">The average price is $250</span>}
            </div>
            {open.price ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
          </button>

          {open.price && (
            <div className="px-4 pb-4 space-y-3">
              {[
                { label: 'All Price', count: '18,425' },
                { label: 'Below £200', count: '145' },
                { label: '£200 - £500', count: '645' },
                { label: '£500 - £800', count: '12,215' },
                { label: 'Custom Price', count: null }
              ].map((opt) => (
                <label key={opt.label} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => setLocal({ ...local, priceType: opt.label })}
                      className={`w-4 h-4 rounded border-2 flex items-center justify-center transition-all ${local.priceType === opt.label ? 'bg-blue-600 border-blue-600' : 'bg-white border-gray-200'}`}
                    >
                      {local.priceType === opt.label && (
                        <svg width="8" height="6" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.5 4.5L3.5 6.5L8.5 1.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-xs ${local.priceType === opt.label ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{opt.label}</span>
                  </div>
                  {opt.count && <span className="text-xs text-gray-400">{opt.count}</span>}
                </label>
              ))}

              {local.priceType === 'Custom Price' && (
                <div className="mt-3 bg-white p-3 rounded-xl border border-blue-100 shadow-sm">
                  <div className="flex justify-between mb-4">
                    <span className="text-xs font-bold text-gray-900">Price Range</span>
                    <span className="text-xs text-blue-500 cursor-pointer hover:font-bold">Resets</span>
                  </div>
                  <DualRangeSlider
                    min={0} max={2000}
                    initialMin={local.customPriceMin}
                    initialMax={local.customPriceMax}
                    onChange={(min, max) => setLocal({ ...local, customPriceMin: min, customPriceMax: max })}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Star Rating Section */}
        <div className={`rounded-2xl transition-all overflow-hidden ${open.rating ? 'bg-blue-50/60' : ''}`}>
          <button onClick={() => toggle('rating')} className="flex items-center justify-between w-full px-4 py-4">
            <span className="text-sm font-bold text-gray-900">Star Rating</span>
            {open.rating ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
          </button>
          {open.rating && (
            <div className="px-4 pb-5 flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map(s => <Star key={s} size={18} fill="#FFC107" color="#FFC107" />)}
                <Star size={18} fill="#D1D5DB" color="#D1D5DB" />
              </div>
              <span className="text-xs text-gray-500">4 Stars & up</span>
            </div>
          )}
        </div>

        {/* Stock Status Section */}
        <div className={`rounded-2xl transition-all overflow-hidden ${open.stock ? 'bg-blue-50/60' : ''}`}>
          <button onClick={() => toggle('stock')} className="flex items-center justify-between w-full px-4 py-4">
            <span className="text-sm font-bold text-gray-900">Stock Status</span>
            {open.stock ? <ChevronUp size={16} className="text-gray-500" /> : <ChevronDown size={16} className="text-gray-500" />}
          </button>
          {open.stock && (
            <div className="px-4 pb-5 space-y-3">
              {['All', 'In Stock', 'Low Stock', 'Out of Stock'].map(status => (
                <label key={status} className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div
                      onClick={() => setLocal({ ...local, stockStatus: status })}
                      className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${local.stockStatus === status ? 'border-blue-600 bg-blue-600' : 'border-gray-300'}`}
                    >
                      {local.stockStatus === status && <div className="w-2 h-2 bg-white rounded-full" />}
                    </div>
                    <span className={`text-xs ${local.stockStatus === status ? 'text-gray-900 font-medium' : 'text-gray-600'}`}>{status}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-xs text-gray-400">(15)</span>
                    {local.stockStatus === status && <div className="w-0.5 h-4 bg-blue-500 rounded-full ml-1" />}
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Supplier Section (Collapsed) */}
        <div className={`rounded-2xl transition-all overflow-hidden ${open.supplier ? 'bg-blue-50/60' : ''}`}>
          <button onClick={() => toggle('supplier')} className="flex items-center justify-between w-full px-4 py-4">
            <span className="text-sm font-bold text-gray-900">Supplier</span>
            <ChevronDown size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="space-y-3 mt-6">
        <button
          onClick={() => onApply(local)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-2xl text-sm shadow-lg shadow-blue-100 transition-all active:scale-[0.98]"
        >
          Apply Filters
        </button>
        <button
          onClick={onReset}
          className="w-full text-xs font-medium text-gray-400 hover:text-gray-600 py-2 transition-colors text-center block"
        >
          Reset All Filters
        </button>
      </div>
    </aside>

  );

}