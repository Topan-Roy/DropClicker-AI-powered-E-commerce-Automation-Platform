'use client';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function SelectDropdown({ label, options, value, onChange, className = '' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {label && <label className="text-sm font-medium text-gray-700 mb-1.5 block">{label}</label>}
      <button
        type="button"
        onClick={() => setOpen(p => !p)}
        className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm flex items-center justify-between bg-white hover:border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500/10 transition-all"
      >
        <span className={value && value !== 'Learn more' ? 'text-gray-900' : 'text-gray-400'}>
          {value || options[0]}
        </span>
        <ChevronDown size={16} className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-100 rounded-xl shadow-xl z-30 overflow-hidden py-1 animate-in fade-in zoom-in-95 duration-100">
          {options.map(opt => (
            <button
              key={opt} type="button"
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-blue-50 hover:text-blue-600 ${value === opt ? 'bg-blue-50 text-blue-600 font-semibold' : 'text-gray-700'}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}