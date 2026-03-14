'use client';
import { useState } from 'react';
import { X, Mail, Phone, MapPin, MessageSquare, CreditCard, ChevronRight } from 'lucide-react';

export default function SupplierDetailsPanel({ supplier, onClose, onPayOrder, loading }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!supplier && loading) return null;

  return (
    <div className={`fixed right-0 top-0 h-full w-full max-w-[420px] bg-white shadow-2xl z-40 flex flex-col transition-transform duration-300 transform translate-x-0`}>
      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-100">
        <h2 className="text-lg font-black text-gray-900">Supplier details</h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full text-gray-400 transition-colors">
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Supplier Info */}
        <div className="flex items-center gap-4 px-6 py-6">
          <div className={`${supplier.avatarColor} w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-xl shadow-inner`}>
            {supplier.avatarInitial}
          </div>
          <div>
            <h3 className="text-base font-black text-gray-900 leading-tight">{supplier.name}</h3>
            <p className="text-xs font-bold text-gray-400">Order ID {supplier.orderId}</p>
          </div>
        </div>

        {/* Note */}
        <div className="px-6 mb-6">
          <h4 className="text-sm font-black text-gray-900 mb-1">Note</h4>
          <p className="text-[11px] text-gray-500 font-medium leading-relaxed">{supplier.note}</p>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-gray-100 px-6">
          {['Overview', 'Product', 'Order Updates'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase().replace(' ', ''))}
              className={`pb-3 mr-8 text-xs font-black uppercase tracking-wider transition-all border-b-2 ${
                activeTab === tab.toLowerCase().replace(' ', '')
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-400 hover:text-gray-600'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <section>
                <h4 className="text-sm font-black text-gray-900 mb-4">Order Details</h4>
                <div className="space-y-4">
                  {[
                    { label: 'Order Status', value: supplier.overview.orderStatus, color: 'text-blue-600', dot: 'bg-blue-500' },
                    { label: 'Payment Status', value: supplier.overview.paymentStatus, color: 'text-orange-500', dot: 'bg-orange-500' },
                    { label: 'Total', value: supplier.overview.total, color: 'text-gray-900 font-black' },
                    { label: 'Your Profit', value: supplier.overview.profit, color: 'text-green-600 font-black' },
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center text-sm">
                      <span className="text-gray-400 font-bold">{row.label}</span>
                      <div className={`flex items-center gap-2 ${row.color}`}>
                        {row.dot && <div className={`w-1.5 h-1.5 rounded-full ${row.dot}`} />}
                        {row.value}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <h4 className="text-sm font-black text-gray-900 mb-4">Select Supplier</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 p-2 rounded-lg text-gray-400"><Mail size={16}/></div>
                    <div className="flex-1"><p className="text-[10px] text-gray-400 font-bold uppercase">Email Address</p><p className="text-sm font-bold text-blue-600">{supplier.overview.supplier.email}</p></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-50 p-2 rounded-lg text-gray-400"><Phone size={16}/></div>
                    <div className="flex-1"><p className="text-[10px] text-gray-400 font-bold uppercase">Phone Number</p><p className="text-sm font-bold text-orange-500">{supplier.overview.supplier.phone}</p></div>
                  </div>
                </div>
              </section>
            </div>
          )}

          {activeTab === 'product' && (
            <div className="space-y-4">
              <h4 className="text-sm font-black text-gray-900 mb-2">Order Item</h4>
              {supplier.products.map((p) => (
                <div key={p.id} className="flex items-center gap-3 bg-gray-50 rounded-2xl p-3">
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
              <div className="mt-6 border-t border-gray-100 pt-4 space-y-2">
                 <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Subtotal</span><span>{supplier.subtotal}</span></div>
                 <div className="flex justify-between text-xs font-bold"><span className="text-gray-400">Shipping</span><span>{supplier.shipping}</span></div>
                 <div className="flex justify-between text-sm font-black pt-1 border-t border-gray-50"><span>Total</span><span>{supplier.total}</span></div>
                 <div className="bg-green-50 rounded-2xl px-4 py-3 flex justify-between items-center mt-3">
                    <span className="text-xs font-black text-green-700">Your Profit</span>
                    <span className="text-base font-black text-green-700">{supplier.yourProfit}</span>
                 </div>
              </div>
            </div>
          )}

          {activeTab === 'orderupdates' && (
            <div className="space-y-1">
              {supplier.orderUpdates.map((update) => (
                <div key={update.id} className="flex gap-4 p-4 border-b border-gray-50 hover:bg-gray-50/50 rounded-xl transition-colors relative">
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center shrink-0">
                    <MessageSquare size={18} />
                  </div>
                  <div className="flex-1">
                    <h5 className="text-sm font-black text-gray-900">{update.title}</h5>
                    <p className="text-[11px] text-gray-400 font-bold mb-1 leading-snug">{update.desc}</p>
                    <p className="text-[10px] text-gray-400 font-bold">{update.time}</p>
                  </div>
                  {update.unread && <div className="w-2 h-2 rounded-full bg-blue-500 absolute top-5 right-4" />}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-gray-100">
        <button 
          onClick={onPayOrder}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-[20px] py-4 text-sm font-black flex items-center justify-center gap-2 shadow-lg shadow-blue-100 transition-all active:scale-95"
        >
          <CreditCard size={18} strokeWidth={2.5} /> Pay Order • {supplier.payOrderAmount}
        </button>
      </div>
    </div>
  );
}