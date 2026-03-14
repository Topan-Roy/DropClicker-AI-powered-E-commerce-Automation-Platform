'use client';
import { useState } from 'react';
import { X, Plus, Sparkles } from 'lucide-react';
import { categoryOptions, stockStatusOptions, statusOptions } from '@/data/supplierHubData';

export default function UploadProductModal({ isOpen, onClose }) {
  const [seoTitle, setSeoTitle] = useState('');
  const [seoDesc, setSeoDesc] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] animate-in fade-in duration-300">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Box */}
      <div className="fixed right-0 top-0 h-full w-full max-w-[460px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-500">

        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <h2 className="text-lg font-bold text-gray-900">Add Product</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">

          {/* 1. Product Images */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">Product Images</label>
            <div className="w-20 h-20 border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center cursor-pointer hover:border-blue-300 group transition-all">
              <Plus size={20} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
            </div>
          </div>

          {/* 2. Product Title */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
              Product Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter product title"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
            />
          </div>

          {/* 3. Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Description</label>
            <textarea
              rows={3}
              placeholder="Product description"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400 resize-none"
            />
          </div>

          {/* 4. Category + Supplier */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Category</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 bg-white cursor-pointer">
                <option value="">Select catego</option>
                {categoryOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                Supplier <span className="text-gray-400 font-normal">(defaults to ECOMBUILDS)</span>
              </label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 bg-white font-medium cursor-pointer">
                <option>ECOMBUILDS</option>
              </select>
            </div>
          </div>

          {/* 5. Product SKU + Supplier SKU */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Product SKU</label>
              <input
                type="text"
                placeholder="SKU-001"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Supplier SKU</label>
              <input
                type="text"
                placeholder="SUP-SKU-001"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* 6. Stock Quantity + Cost Price */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Stock Quantity</label>
              <input
                type="number"
                placeholder="0"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Cost Price (£)</label>
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
            </div>
          </div>

          {/* 7. Retail Price + Stock Status */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Retail Price (£)</label>
              <input
                type="number"
                placeholder="0.00"
                step="0.01"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Stock Status</label>
              <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 bg-white cursor-pointer">
                <option value="In Stock">In Stock</option>
                {stockStatusOptions.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          </div>

          {/* 8. Status */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Status</label>
            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 bg-white font-medium cursor-pointer">
              <option value="Active">Active</option>
              {statusOptions.map(opt => <option key={opt}>{opt}</option>)}
            </select>
          </div>

          {/* 9. SEO Row */}
          <div className="pt-2 flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                defaultChecked
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500/20 accent-blue-600"
              />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                Search Engine Optimization (SEO)
              </span>
            </label>
            <button className="text-[11px] font-bold text-blue-600 flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Sparkles size={12} className="fill-blue-600" /> Generate AI Metadata
            </button>
          </div>

          {/* 10. SEO Title */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">SEO Title</label>
            <div className="relative">
              <input
                maxLength={60}
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                type="text"
                placeholder="Search engine title"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400"
              />
              <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 font-medium">
                {seoTitle.length}/60
              </span>
            </div>
          </div>

          {/* 11. Meta Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Meta Description</label>
            <div className="relative">
              <textarea
                maxLength={160}
                value={seoDesc}
                onChange={(e) => setSeoDesc(e.target.value)}
                rows={3}
                placeholder="Description for search results"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400 resize-none"
              />
              <span className="absolute right-3 bottom-2 text-[10px] text-gray-400 font-medium">
                {seoDesc.length}/160
              </span>
            </div>
          </div>

          {/* 12. URL Slug */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">URL Slug (Handle)</label>
            <input
              type="text"
              placeholder="/product - my-product-handle"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm bg-gray-50/50 focus:outline-none text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-6 py-5 shrink-0">
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onClose}
              type="button"
              className="py-3 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-3 rounded-xl bg-blue-600 text-white text-sm font-bold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}