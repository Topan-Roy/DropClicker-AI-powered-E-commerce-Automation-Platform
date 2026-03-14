

'use client'
import { useState } from 'react';
import { X } from 'lucide-react';

export default function SendEmailModal({ isOpen, onClose }) {
  const [form, setForm] = useState({ to: '', subject: '', message: '' });
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-[60] flex items-end sm:items-center justify-center sm:p-4 backdrop-blur-sm">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl w-full sm:max-w-[380px] p-5 sm:p-6 animate-in slide-in-from-bottom sm:zoom-in-95 duration-200">

        {/* Header */}
        <div className="flex items-center justify-between mb-5 sm:mb-6">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">Send Email</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1">
            <X size={18} />
          </button>
        </div>

        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">To</label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
              placeholder="Enter email..."
              value={form.to}
              onChange={e => setForm({ ...form, to: e.target.value })}
            />
          </div>
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Subject</label>
            <input
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
              placeholder="Enter subject..."
              value={form.subject}
              onChange={e => setForm({ ...form, subject: e.target.value })}
            />
          </div>
          <div className="space-y-1.5 relative">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Message</label>
            <textarea
              rows={4}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all resize-none"
              placeholder="Enter message..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
            />
            <span className="absolute bottom-3 right-3 text-[10px] font-bold text-gray-400">300/300</span>
          </div>
        </div>

        <div className="flex gap-3 mt-6 sm:mt-8">
          <button onClick={onClose} className="flex-1 py-2.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
            Cancel
          </button>
          <button className="flex-1 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-colors">
            Send Email
          </button>
        </div>
      </div>
    </div>
  );
}