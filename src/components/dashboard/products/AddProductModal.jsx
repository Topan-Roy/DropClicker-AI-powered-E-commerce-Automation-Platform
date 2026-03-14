'use client';
import { X, Plus, Info, Sparkles, Check } from 'lucide-react';

export default function AddProductModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-[100] flex justify-end">
            <div
                className="bg-white w-full max-w-md h-full overflow-y-auto animate-in slide-in-from-right duration-300 shadow-2xl"
            >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5 sticky top-0 bg-white z-10">
                    <h2 className="text-lg font-bold text-gray-900">Add Product</h2>
                    <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                        <X size={20} className="text-gray-500" />
                    </button>
                </div>

                {/* Form Content */}
                <div className="px-6 py-5 space-y-6">
                    {/* Product Images */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-2 block">Product Images</label>
                        <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 flex items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/50 transition-all">
                            <Plus size={24} className="text-gray-400" />
                        </div>
                    </div>

                    {/* Product Title */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                            Product Title <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter product title"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Description</label>
                        <textarea
                            rows={3}
                            placeholder="Product description"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 placeholder:text-gray-400"
                        />
                    </div>

                    {/* Category + Supplier */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Category</label>
                            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white cursor-pointer">
                                <option>Select category</option>
                            </select>
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Supplier (defaults to ECOMBUILDS)</label>
                            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white cursor-pointer">
                                <option>ECOMBUILDS</option>
                            </select>
                        </div>
                    </div>

                    {/* SKU + Supplier SKU */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Product SKU</label>
                            <input
                                type="text"
                                placeholder="SKU-001"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Supplier SKU</label>
                            <input
                                type="text"
                                placeholder="SUP-SKU-001"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    {/* Quantity + Cost */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Stock Quantity</label>
                            <input
                                type="number"
                                placeholder="0"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Cost Price (£)</label>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                    </div>

                    {/* Price + Stock Status */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Retail Price (£)</label>
                            <input
                                type="text"
                                placeholder="0.00"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Stock Status</label>
                            <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white">
                                <option>In Stock</option>
                                <option>Low Stock</option>
                                <option>Out of Stock</option>
                            </select>
                        </div>
                    </div>

                    {/* Status */}
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Status</label>
                        <select className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 bg-white">
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                    </div>

                    {/* SEO Section */}
                    <div className="space-y-4 pt-2">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-5 h-5 rounded border border-gray-300 flex items-center justify-center bg-gray-900">
                                    <Check size={12} className="text-white" />
                                </div>
                                <span className="text-sm font-semibold text-gray-800">Search Engine Optimization (SEO)</span>
                            </div>
                            <button className="flex items-center gap-1.5 text-blue-600 text-sm font-bold">
                                <Sparkles size={14} /> Generate AI Metadata
                            </button>
                        </div>

                        <div>
                            <div className="flex items-center justify-between mb-1.5">
                                <label className="text-sm font-semibold text-gray-700">SEO Title</label>
                                <span className="text-[10px] text-gray-400 font-medium tracking-wider">0/60</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Search engine title"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">Meta Description</label>
                            <div className="relative">
                                <textarea
                                    rows={3}
                                    placeholder="Description for search results"
                                    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                                />
                                <span className="absolute bottom-3 right-3 text-[10px] text-gray-400 font-medium tracking-wider">0/160</span>
                            </div>
                        </div>

                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-1.5 block">URL Slug (Handle)</label>
                            <input
                                type="text"
                                placeholder="/product - my-product-handle"
                                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400"
                            />
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 sticky bottom-0 bg-white border-t border-gray-50 flex gap-3">
                    <button
                        onClick={onClose}
                        className="flex-1 border border-gray-200 rounded-2xl py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button className="flex-1 bg-blue-600 rounded-2xl py-3 text-sm font-bold text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-100">
                        Add Product
                    </button>
                </div>
            </div>
        </div>
    );
}
