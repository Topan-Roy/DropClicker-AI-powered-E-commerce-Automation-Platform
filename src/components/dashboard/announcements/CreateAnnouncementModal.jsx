'use client'
import { useState } from 'react';
import { X, ChevronDown } from 'lucide-react';
import { announcementTypeOptions } from '@/data/announcementsData';

export default function CreateAnnouncementModal({ isOpen, onClose, onCreated }) {
  const [form, setForm] = useState({
    title: '',
    content: '',
    type: 'Information',
    priority: '',
    link: '',
    linkText: '',
    active: true,
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title) return;

    const newAnnouncement = {
      ...form,
      id: Date.now(),
      createdAt: 'Feb 16 • 11:51 AM', // Mock timestamp
      priority: form.priority || 0
    };

    // TODO: POST /api/announcements
    onCreated(newAnnouncement);
    onClose();
    setForm({ title: '', content: '', type: 'Information', priority: '', link: '', linkText: '', active: true });
  };

  const isFormValid = form.title.length > 0;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-end">
      <div className="bg-white h-full w-full max-w-[480px] flex flex-col shadow-2xl rounded-l-2xl animate-in slide-in-from-right duration-300">
        <form onSubmit={handleSubmit} className="h-full flex flex-col overflow-hidden">
          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-lg font-bold text-gray-900">Create Announcement</h2>
                <p className="text-sm text-gray-400">Create a new announcement for all users</p>
              </div>
              <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600 cursor-pointer p-1 hover:bg-gray-50 rounded-lg transition-colors"><X size={20} /></button>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
                  placeholder="Announcement title"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                <textarea
                  rows={4}
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all resize-none"
                  placeholder="Announcement message"
                  value={form.content}
                  onChange={(e) => setForm({ ...form, content: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none appearance-none bg-white focus:border-blue-400 cursor-pointer"
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                  >
                    {announcementTypeOptions.map(opt => <option key={opt}>{opt}</option>)}
                  </select>
                  <ChevronDown className="absolute right-3 bottom-3 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                  <input
                    type="number"
                    className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm outline-none focus:border-blue-400"
                    placeholder="Enter your note here..."
                    value={form.priority}
                    onChange={(e) => setForm({ ...form, priority: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link (optional)</label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  placeholder="/page or https://..."
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Link Text (optional)</label>
                <input
                  className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-blue-400"
                  placeholder="Learn more"
                  value={form.linkText}
                  onChange={(e) => setForm({ ...form, linkText: e.target.value })}
                />
              </div>

              <div className="flex items-center justify-between mt-2 p-4 bg-gray-50 rounded-2xl">
                <div>
                  <p className="text-sm font-bold text-gray-900">Active</p>
                  <p className="text-xs text-gray-400">Show to users</p>
                </div>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, active: !form.active })}
                  className={`w-11 h-6 rounded-full relative transition-colors duration-200 cursor-pointer ${form.active ? 'bg-blue-600' : 'bg-gray-700'}`}
                >
                  <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all duration-200 shadow-sm ${form.active ? 'left-1' : 'left-6'}`} />
                </button>
              </div>
            </div>
          </div>

          {/* Footer buttons pinned to bottom */}
          <div className="mt-auto border-t border-gray-100 px-6 py-4 bg-white flex flex-col gap-3">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 bg-white border border-gray-200 rounded-xl text-sm font-bold text-gray-700 hover:bg-gray-50 transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 rounded-xl text-sm font-bold text-white transition-all cursor-pointer ${isFormValid ? 'opacity-100' : 'opacity-40 cursor-not-allowed'}`}
              style={isFormValid ? { background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)' } : { backgroundColor: '#E5E7EB' }}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}