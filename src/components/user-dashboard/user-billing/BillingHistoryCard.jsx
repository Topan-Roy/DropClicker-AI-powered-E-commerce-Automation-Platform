'use client';
import { Clock } from 'lucide-react';

export default function BillingHistoryCard({ history }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="mb-4">
        <h3 className="font-bold text-gray-900 text-lg">Billing History</h3>
        <p className="text-sm text-gray-400">Your recent invoices and payments</p>
      </div>

      {history?.length === 0 ? (
        <div className="py-12 flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
            <Clock className="text-gray-300" size={32} />
          </div>
          <p className="text-sm font-medium text-gray-400">No billing history yet</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Table logic for later */}
        </div>
      )}
    </div>
  );
}