'use client'
import { X, Plus, ChevronDown } from 'lucide-react';
import { useState, useMemo, useEffect } from 'react';
import { collectionStatusOptions, collectionTypeOptions } from '@/data/collectionsData';

export default function CreateCollectionModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: '', desc: '', banner: '', status: 'Active', type: 'Manual' });
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  const isValid = useMemo(() => form.name.trim().length > 0, [form.name]);

  if (!isRendered && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      {/* Drawer Box */}
      <div className={`absolute inset-y-0 right-0 w-full sm:w-[500px] bg-white shadow-[0_0_50px_rgba(0,0,0,0.1)] rounded-l-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-100 flex items-center justify-between bg-white shrink-0">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Create Collection</h2>
            <p className="text-xs text-gray-400 mt-1 font-medium italic">Create a new product group for your store</p>
          </div>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-50 rounded-full transition-all">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-8 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          
          {/* Collection Image */}
          <div className="space-y-3">
            <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Collection Image</label>
            <div className="w-24 h-24 border-2 border-dashed border-gray-100 rounded-2xl flex flex-col items-center justify-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 group transition-all gap-2 bg-gray-50/50">
              <Plus className="text-gray-300 group-hover:text-blue-500 transition-colors" size={24} />
              <span className="text-[11px] font-bold text-gray-400 group-hover:text-blue-500 uppercase">Upload</span>
            </div>
          </div>

          {/* Form Fields */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">
                Collection Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text" 
                placeholder="e.g. Summer Essentials 2024"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 placeholder:text-gray-300 transition-all font-medium"
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Description</label>
              <textarea
                rows={5} 
                placeholder="Describe your collection..."
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 placeholder:text-gray-300 transition-all resize-none"
                value={form.desc} onChange={(e) => setForm({ ...form, desc: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Banner Image URL</label>
              <input
                type="text" 
                placeholder="https://example.com/banner.jpg"
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-medium outline-none focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 placeholder:text-gray-300 transition-all"
                value={form.banner} onChange={(e) => setForm({ ...form, banner: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Status</label>
                <div className="relative">
                  <select 
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-bold outline-none appearance-none bg-white cursor-pointer focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 transition-all text-gray-700" 
                    value={form.status} 
                    onChange={(e) => setForm({ ...form, status: e.target.value })}
                  >
                    {collectionStatusOptions.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-gray-700 uppercase tracking-wider">Type</label>
                <div className="relative">
                  <select 
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-[13px] font-bold outline-none appearance-none bg-white cursor-pointer focus:ring-4 focus:ring-blue-500/5 focus:border-blue-400 transition-all text-gray-700" 
                    value={form.type} 
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {collectionTypeOptions.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-white border-t border-gray-100 px-8 py-6 shrink-0">
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={onClose}
              className="py-3.5 rounded-xl border border-gray-200 text-[13px] font-bold text-gray-600 hover:bg-gray-50 transition-all active:scale-[0.98]"
            >
              Cancel
            </button>
            <button
              disabled={!isValid}
              className={`py-3.5 rounded-xl text-[13px] font-bold transition-all active:scale-[0.98] ${isValid ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700' : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
            >
              Save Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}