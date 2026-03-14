'use client'
import { useState } from 'react';
import { X, CreditCard, Loader2 } from 'lucide-react';

export default function CompletePaymentModal({ isOpen, onClose, plan }) {
  const [processing, setProcessing] = useState(false);
  if (!isOpen) return null;

  const handlePay = async () => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 2000)); // TODO: POST to /api/billing/subscribe
    setProcessing(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-7 animate-in fade-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold text-gray-900">Complete Payment</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors"><X size={20} className="text-gray-400" /></button>
        </div>

        <div className="bg-blue-50/80 rounded-2xl p-4 flex justify-between items-center mb-8 border border-blue-100/50">
          <div>
            <p className="font-bold text-gray-900">{plan?.name} Plan</p>
            <p className="text-[11px] text-gray-400">Billed monthly</p>
          </div>
          <p className="text-lg font-black text-gray-900">£{plan?.price}/mo</p>
        </div>

        <div className="space-y-4">
          <label className="text-xs font-bold text-gray-700 block ml-1">Card Details</label>
          <div className="relative">
            <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input type="text" placeholder="Card number" className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="MM / YY" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
            <input type="text" placeholder="CVC" className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
          </div>
        </div>

        <div className="flex gap-4 mt-8">
          <button onClick={onClose} className="flex-1 py-3.5 border border-gray-200 rounded-xl text-sm font-bold text-gray-600 hover:bg-gray-50 transition-all">Cancel</button>
          <button 
            onClick={handlePay}
            disabled={processing}
            className="flex-1 py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-200 active:scale-[0.98] transition-all"
          >
            {processing ? <Loader2 className="animate-spin" size={18} /> : `Pay £${plan?.price}`}
          </button>
        </div>
      </div>
    </div>
  );
}