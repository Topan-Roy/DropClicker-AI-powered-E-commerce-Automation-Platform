'use client';
import { useState } from 'react';
import { X } from 'lucide-react';

export default function AddSupplierModal({ isOpen, onClose }) {
    const [supplierName, setSupplierName] = useState('');
    const [productTitle, setProductTitle] = useState('');

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] p-6 animate-in zoom-in-95 duration-200">

                <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-5">
                    <h2 className="text-lg font-bold text-gray-900">Add Suppler</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X size={20} />
                    </button>
                </div>

                <div className="space-y-4">
                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                            Supplier Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={supplierName}
                            onChange={(e) => setSupplierName(e.target.value)}
                            placeholder="e.g. Wholesale Supplier UK"
                            className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400 transition-all"
                        />
                    </div>

                    <div className="bg-green-50 border border-green-100 rounded-xl px-4 py-3">
                        <p className="text-xs text-green-700 font-medium leading-relaxed">
                            <span className="font-bold">Note:</span> You can add a supplier now and
                            configure the feed later. Feed sync is optional
                        </p>
                    </div>

                    <div>
                        <label className="text-sm font-semibold text-gray-700 mb-1.5 block">
                            Product Title <span className="text-red-500">*</span>
                        </label>
                        <div className="flex items-center gap-2">
                            <input
                                type="text"
                                value={productTitle}
                                onChange={(e) => setProductTitle(e.target.value)}
                                placeholder="Enter product title"
                                className="flex-1 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 placeholder:text-gray-400 transition-all"
                            />
                            <button className="bg-blue-600 text-white rounded-xl px-4 py-2.5 text-sm font-bold flex-shrink-0 hover:bg-blue-700 transition-all active:scale-95">
                                Load Columns
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-3">
                    <button
                        onClick={onClose}
                        className="border border-gray-200 rounded-xl py-3 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all active:scale-95"
                    >
                        Cancel
                    </button>
                    <button
                        className="bg-blue-600 text-white rounded-xl py-3 text-sm font-bold hover:bg-blue-700 transition-all shadow-md shadow-blue-100 active:scale-95"
                    >
                        Save Supplier(No Feed)
                    </button>
                </div>
            </div>
        </div>
    );
}
