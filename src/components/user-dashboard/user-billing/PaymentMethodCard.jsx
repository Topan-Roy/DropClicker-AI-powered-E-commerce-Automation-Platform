'use client';
import { CreditCard } from 'lucide-react';

export default function PaymentMethodCard({ method }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      <div className="mb-6">
        <h3 className="font-bold text-gray-900 text-lg">Payment Method</h3>
        <p className="text-sm text-gray-400">Manage your payment options</p>
      </div>

      <div className="flex items-center justify-between border border-gray-100 rounded-2xl p-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
            <CreditCard size={24} />
          </div>
          <div>
            <p className="font-bold text-gray-900">{method?.brand} ****{method?.last4}</p>
            <p className="text-xs text-gray-400 font-medium">Expires {method?.expiry}</p>
          </div>
        </div>
        <button className="text-blue-600 font-bold text-sm hover:underline">Edit</button>
      </div>
    </div>
  );
}