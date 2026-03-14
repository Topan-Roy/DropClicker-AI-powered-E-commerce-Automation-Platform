'use client';
import { Sparkles } from 'lucide-react';
import SelectDropdown from './SelectDropdown';

export default function FromURLForm({ form, onChange, generationTypes, visualStyles, onGenerate, generating }) {
  const isDisabled = !form.url || generating;

  return (
    <div className="space-y-4">
      <div>
        <label className="text-sm font-medium text-gray-700 mb-1.5 block">Product Page URL</label>
        <input
          type="url"
          value={form.url}
          onChange={(e) => onChange('url', e.target.value)}
          placeholder="https://store.com/product"
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 transition-all"
        />
      </div>

      <SelectDropdown 
        label="Generation Type" 
        options={generationTypes} 
        value={form.generationType} 
        onChange={(val) => onChange('generationType', val)} 
      />

      <SelectDropdown 
        label="Visual Style" 
        options={visualStyles} 
        value={form.visualStyle} 
        onChange={(val) => onChange('visualStyle', val)} 
      />

      <button
        onClick={onGenerate}
        disabled={isDisabled}
        className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-sm transition-all mt-6 
          ${isDisabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100'}`}
      >
        {generating ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        ) : (
          <>
            <Sparkles size={16} />
            <span>Generate Assets</span>
          </>
        )}
      </button>
    </div>
  );
}