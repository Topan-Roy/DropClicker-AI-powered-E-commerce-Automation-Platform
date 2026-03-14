'use client';
import { Sparkles } from 'lucide-react';
import SelectDropdown from './SelectDropdown';
import { toneOptions, lengthOptions } from '@/data/engineeringData';

export default function BlogSettingsPanel({ form, onChange, onGenerate, generating, errors, disabled }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07)]">
      <div className="flex items-center gap-2 mb-5 pb-4 border-b border-gray-100">
        <Sparkles size={18} className="text-blue-500" />
        <h2 className="text-lg font-bold text-gray-900">Blog Settings</h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">Website URL</label>
          <input
            type="url"
            value={form.websiteUrl}
            onChange={e => onChange('websiteUrl', e.target.value)}
            placeholder="https://yourstore.com"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 transition-all"
          />
          <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">
            We scan your site to extract collections for internal links.
          </p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            Target Keyword <span className="text-blue-500 font-bold">*</span>
          </label>
          <input
            type="text"
            value={form.targetKeyword}
            onChange={e => onChange('targetKeyword', e.target.value)}
            placeholder="Announcement title"
            className={`w-full border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 transition-all ${errors?.targetKeyword ? 'border-red-300 focus:ring-red-500/10' : 'border-gray-200 focus:ring-blue-500/10 focus:border-blue-400'}`}
          />
          {errors?.targetKeyword && <p className="text-xs text-red-500 mt-1">{errors.targetKeyword}</p>}
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-1.5 block">
            Blog Title <span className="text-gray-400 font-normal text-xs">(Optional)</span>
          </label>
          <input
            type="text"
            value={form.blogTitle}
            onChange={e => onChange('blogTitle', e.target.value)}
            placeholder="Learn more"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/10 focus:border-blue-400 transition-all"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <SelectDropdown label="Tone" options={toneOptions} value={form.tone} onChange={val => onChange('tone', val)} />
          <SelectDropdown label="Length" options={lengthOptions} value={form.length} onChange={val => onChange('length', val)} />
        </div>

        <button
          onClick={onGenerate}
          disabled={disabled}
          className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold transition-all mt-2 ${disabled ? 'bg-blue-400 cursor-not-allowed text-white' : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-100 active:scale-[0.98]'}`}
        >
          {generating ? (
            <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Generating...</>
          ) : (
            <><Sparkles size={16} /> Generate Blog Post</>
          )}
        </button>
      </div>
    </div>
  );
}