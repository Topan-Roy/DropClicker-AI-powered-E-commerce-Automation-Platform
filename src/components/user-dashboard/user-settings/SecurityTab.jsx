'use client'
import { Save, Loader2 } from 'lucide-react';
import ToggleRow from './ToggleRow';

export default function SecurityTab({ security, onChange, onSave, saving }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-4xl">
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-gray-100">
        <div>
          <h3 className="text-base font-bold text-gray-900">Email Notifications</h3>
          <p className="text-sm text-gray-400">Choose what emails you receive</p>
        </div>
        <button
          onClick={onSave}
          disabled={saving}
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 text-sm font-semibold flex items-center gap-2 transition-all active:scale-95 shadow-sm shadow-blue-100"
        >
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          Save Security Setting
        </button>
      </div>
      
      <ToggleRow 
        title="New Orders" 
        description="Get notified when you receive new orders"
        value={security.newOrdersAlert}
        onChange={(v) => onChange('newOrdersAlert', v)}
        bgColor="bg-red-50/50"
      />
    </div>
  );
}