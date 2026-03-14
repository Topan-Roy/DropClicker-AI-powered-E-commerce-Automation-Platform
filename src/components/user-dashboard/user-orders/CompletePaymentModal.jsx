'use client';
import { useState } from 'react';
import { X, CreditCard, Lock } from 'lucide-react';

export default function CompletePaymentModal({ supplier, onClose, onSubmit }) {
  const [processing, setProcessing] = useState(false);

  const handlePay = async () => {
    setProcessing(true);
    await new Promise(r => setTimeout(r, 1500));
    setProcessing(false);
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-[32px] shadow-2xl w-full max-w-[460px] max-h-[90vh] overflow-y-auto flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 pb-4 border-b border-gray-100">
          <h2 className="text-xl font-black text-gray-900">Complete Payment</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Items */}
          <section>
            <h4 className="text-sm font-black text-gray-900 mb-3">Order Item</h4>
            {supplier.products.map((p) => (
              <div key={p.id} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3 mb-2">
                <img src={p.image} className="w-14 h-14 rounded-xl object-cover border border-gray-100" alt={p.name} />
                <div className="flex-1">
                  <h5 className="text-[11px] font-black text-gray-900 uppercase">{p.name}</h5>
                  <p className="text-[10px] font-bold text-gray-400">Qty: {p.qty}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-black text-gray-900">£{p.price.toFixed(2)}</p>
                  <p className="text-[10px] font-bold text-green-600">Your Profit: £{p.profit.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </section>

          {/* Summary */}
          <section className="bg-gray-50/50 rounded-2xl p-4 border border-gray-100">
            <div className="flex justify-between text-xs font-bold mb-2"><span className="text-gray-400">Subtotal</span><span className="text-gray-900">{supplier.subtotal}</span></div>
            <div className="flex justify-between text-xs font-bold mb-3"><span className="text-gray-400">Shipping</span><span className="text-gray-900">{supplier.shipping}</span></div>
            <div className="flex justify-between text-lg font-black pt-3 border-t border-gray-100"><span>Total</span><span>{supplier.total}</span></div>
          </section>

          {/* Form */}
          <section>
            <h4 className="text-sm font-black text-gray-900 mb-3">Card Details</h4>
            <div className="space-y-3">
              <div className="relative">
                <CreditCard size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input 
                  placeholder="Card number" 
                  className="w-full bg-white border border-gray-200 rounded-xl pl-11 pr-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" 
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="MM/YY" className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" />
                <input placeholder="CVC" className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <input placeholder="Country" className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" />
                <input placeholder="Postcode" className="bg-white border border-gray-200 rounded-xl px-4 py-3.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-100" />
              </div>
            </div>
          </section>
        </div>

        {/* Action */}
        <div className="p-6 pt-2 flex gap-3">
          <button 
            onClick={onClose}
            className="flex-1 py-3.5 border border-gray-200 rounded-2xl text-sm font-black text-gray-700 hover:bg-gray-50 transition-all"
          >
            Cancel
          </button>
          <button 
            onClick={handlePay}
            disabled={processing}
            className="flex-[2] bg-blue-600 hover:bg-blue-700 text-white rounded-2xl py-3.5 text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95 disabled:opacity-70"
          >
            {processing ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Pay {supplier.total}</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}