'use client';
import { Building2 } from 'lucide-react';

export default function PayoutSettingsCard({ settings }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="font-bold text-gray-900 text-lg">Payout Settings</h3>
          <p className="text-sm text-gray-400">Configure how you receive payments</p>
        </div>
        <button className="px-4 py-2 border border-gray-200 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-colors">
          Connect Bank
        </button>
      </div>

      <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <Building2 size={24} />
          </div>
          <div>
            <p className="font-bold text-gray-900">{settings?.bankName}</p>
            <p className="text-xs text-gray-400 font-medium">Status: Connected</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-xl text-xs font-bold text-gray-700 transition-colors">
          Withdraw Funds
        </button>
      </div>
    </div>
  );
}