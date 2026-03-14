'use client';
import { RefreshCw } from 'lucide-react';

export default function RecentSyncActivity({ data }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold text-gray-900">Recent Sync Activity</h2>
        <button className="text-sm font-semibold text-indigo-600 flex items-center gap-1">
          View all <span>→</span>
        </button>
      </div>
      <div className="space-y-3">
        {data.map((sync) => (
          <div key={sync.id} className="flex items-center justify-between p-4 bg-blue-50/40 rounded-xl border border-blue-50/50">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                <RefreshCw size={18} />
              </div>
              <span className="text-sm font-medium text-gray-700">{sync.time}</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          </div>
        ))}
      </div>
    </div>
  );
}