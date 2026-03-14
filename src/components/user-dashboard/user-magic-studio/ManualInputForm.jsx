'use client';
import { Sparkles, Image as ImageIcon, Loader2 } from 'lucide-react';
import { useRef } from 'react';
import SelectDropdown from './SelectDropdown';

export default function ManualInputForm({ form, onChange, onImageUpload, generationTypes, visualStyles, onGenerate, generating }) {
  const fileInputRef = useRef(null);
  const isDisabled = !form.productTitle || generating;

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <label className="text-sm font-medium text-gray-700 mb-2 block">Product Page URL</label>
        <div className="flex items-center gap-4">
          <div className="w-24 h-20 rounded-xl border border-gray-200 overflow-hidden bg-gray-50 flex items-center justify-center flex-shrink-0">
            {form.productImagePreview ? (
              <img src={form.productImagePreview} className="w-full h-full object-cover" alt="Preview" />
            ) : (
              <ImageIcon className="text-gray-300" size={24} />
            )}
          </div>
          <button 
            onClick={() => fileInputRef.current?.click()}
            className="border border-gray-300 rounded-xl px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Change Photo
          </button>
          <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={onImageUpload} />
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Product Title</label>
        <input
          type="text"
          value={form.productTitle}
          onChange={(e) => onChange('productTitle', e.target.value)}
          placeholder="e.g. Premium Wireless Headphones"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Description</label>
        <textarea
          rows={4}
          value={form.description}
          onChange={(e) => onChange('description', e.target.value)}
          placeholder="Enter your message"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
        />
      </div>

      <SelectDropdown label="Generation Type" options={generationTypes} value={form.generationType} onChange={(v) => onChange('generationType', v)} />
      <SelectDropdown label="Visual Style" options={visualStyles} value={form.visualStyle} onChange={(v) => onChange('visualStyle', v)} />

      <button
        onClick={onGenerate}
        disabled={isDisabled}
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all mt-4 
          ${isDisabled ? 'bg-gray-100 text-gray-400' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100'}`}
      >
        {generating ? <Loader2 className="animate-spin" size={20} /> : <><Sparkles size={16} /> Generate Assets</>}
      </button>
    </div>
  );
}