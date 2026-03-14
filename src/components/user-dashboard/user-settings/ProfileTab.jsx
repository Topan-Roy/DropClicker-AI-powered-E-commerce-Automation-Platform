'use client'
import { Save, Loader2 } from 'lucide-react';

export default function ProfileTab({ profile, onChange, onSave, saving }) {
  const fields = [
    { label: 'Full Name', key: 'fullName' },
    { label: 'Email', key: 'email' },
    { label: 'Company', key: 'company' },
    { label: 'Website', key: 'website' },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-4xl">
      <div className="flex items-start justify-between mb-8 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-gray-900">Billing History</h3>
          <p className="text-sm text-gray-400">Your recent invoices and payments</p>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 disabled:opacity-70"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          Save Changes
        </button>
      </div>

      <div className="flex items-center gap-4 mb-8">
        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center">
          <div className="w-1.5 h-1.5 bg-white rounded-full" />
        </div>
        <button className="border border-gray-200 rounded-xl px-4 py-2 text-sm font-bold text-gray-700 hover:bg-gray-50">
          Change Photo
        </button>
        <button className="text-red-500 text-sm font-bold hover:underline">Delete</button>
      </div>

      <div className="grid grid-cols-2 gap-x-6 gap-y-5">
        {fields.map((f) => (
          <div key={f.key}>
            <label className="text-sm font-bold text-gray-600 mb-2 block">{f.label}</label>
            <input
              type="text"
              value={profile[f.key]}
              onChange={(e) => onChange(f.key, e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}