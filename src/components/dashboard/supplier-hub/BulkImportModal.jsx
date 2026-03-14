'use client';
import { useState } from 'react';
import { X, Info, Download, ArrowUpFromLine } from 'lucide-react';

export default function BulkImportModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('New Import');
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-[999] flex items-center justify-center p-4 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-[420px] overflow-hidden animate-in zoom-in-95 duration-200">

        {/* Header */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 leading-tight">Bulk Import Products</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors pt-0.5">
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          {/* Tabs */}
          <div className="bg-gray-100/80 rounded-xl p-1 flex gap-1 mb-5">
            {['New Import', 'History'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 text-sm font-bold rounded-lg transition-all ${activeTab === tab ? 'bg-white text-gray-900 shadow-sm' : 'text-gray-500'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {activeTab === 'New Import' ? (
            <div className="space-y-5">
              {/* Info Box */}
              <div className="bg-green-50 border border-green-100 rounded-xl p-3.5 flex items-start gap-3">
                <Info className="text-green-600 shrink-0 mt-0.5" size={16} />
                <div>
                  <p className="text-xs font-medium text-green-800 leading-normal">
                    Required: Handle, Title, SKU, Cost Price, Retail Price, Stock
                  </p>
                  <button className="text-xs font-semibold text-green-700 flex items-center gap-1 mt-1.5 hover:text-green-900 transition-colors">
                    <Download size={12} strokeWidth={2.5} /> Download Template
                  </button>
                </div>
              </div>

              {/* Upload Zone */}
              <div
                className="border-2 border-dashed border-gray-200 rounded-2xl h-36 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-300 hover:bg-blue-50/20 transition-all group"
              >
                <ArrowUpFromLine size={32} className="text-gray-400 group-hover:text-blue-500 transition-colors" />
                <p className="text-sm text-gray-500 font-medium">
                  Drop CSV here or <span className="text-green-600 font-semibold">click to browse</span>
                </p>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-600 text-white rounded-xl py-3 text-sm font-bold shadow-md shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95">
                Import CSV File
              </button>
            </div>
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-400 text-sm italic">
              No import history found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}