'use client'
import { X, Mail, Phone, MapPin, MessageSquare, Edit } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supplierProducts } from '@/data/ordersData';
import OrderStatusDropdown from './OrderStatusDropdown';

export default function SupplierDetailsModal({ isOpen, onClose, order, onOpenEmail }) {
  const [tab, setTab] = useState('Overview');
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isRendered && !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} 
        onClick={onClose} 
      />
      
      {/* Drawer Panel */}
      <div className={`absolute inset-y-0 right-0 w-full sm:w-[520px] bg-white shadow-2xl rounded-l-2xl flex flex-col transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header */}
        <div className="px-6 py-5 border-b border-gray-100 flex-shrink-0">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg">P</div>
              <div>
                <h2 className="text-[17px] font-bold text-gray-900 leading-tight">PrimeGoods</h2>
                <p className="text-[13px] font-medium text-gray-500 mt-0.5">Order ID #FCM-990</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <OrderStatusDropdown currentStatus={order?.status || 'Shipped'} onStatusChange={() => {}} />
              <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 transition-colors">
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="mt-4">
             <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Select Supplier</p>
          </div>
        </div>

        {/* Body Content */}
        <div className="flex flex-1 overflow-hidden flex-col sm:flex-row">
          
          {/* Left Column — Product List */}
          <div className="w-full sm:w-[260px] border-r border-gray-100 flex flex-col bg-white overflow-y-auto">
            <div className="p-5 space-y-5">
               <div className="space-y-4">
                 {supplierProducts.map((prod, i) => (
                   <div key={i} className="flex gap-3">
                     <img src={prod.image} className="w-12 h-12 rounded-lg object-cover bg-gray-50 border border-gray-100 flex-shrink-0" alt="" />
                     <div className="flex-1 min-w-0">
                       <div className="flex justify-between items-start gap-2">
                         <p className="text-[13px] font-bold text-gray-900 leading-tight">{prod.name}</p>
                         <p className="text-[13px] font-bold text-gray-900 whitespace-nowrap">£65.00</p>
                       </div>
                       <p className="text-[11px] text-gray-500 mt-1">Qty: 1</p>
                       <div className="flex justify-end mt-1">
                         <p className="text-[11px] text-gray-400 font-medium">Cost: £46.00</p>
                       </div>
                     </div>
                   </div>
                 ))}
               </div>

               <div className="pt-4 border-t border-gray-100 space-y-2.5">
                 <div className="flex justify-between text-[13px] text-gray-500">
                    <span>Subtotal</span>
                    <span className="font-semibold text-gray-900">£130.00</span>
                 </div>
                 <div className="flex justify-between text-[13px] text-gray-500">
                    <span>Shipping</span>
                    <span className="font-semibold text-gray-900">£0.00</span>
                 </div>
                 <div className="flex justify-between text-[13px] font-bold text-gray-900 pt-1">
                    <span>Total</span>
                    <span>£130.00</span>
                 </div>

                 <div className="bg-green-50 rounded-lg p-3 flex justify-between items-center mt-3">
                    <span className="text-[13px] font-bold text-green-700">Your Profit</span>
                    <span className="text-[13px] font-bold text-green-700">£38.00</span>
                 </div>
               </div>

               <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-[13px] font-bold text-gray-900">Billing History</h4>
                      <p className="text-[11px] text-gray-500">Manage your payment options</p>
                    </div>
                    <button className="text-blue-600 bg-blue-50 p-2 rounded-lg hover:bg-blue-100 transition-colors">
                      <Edit size={16} />
                    </button>
                  </div>
                  <p className="text-[11px] text-gray-400 mt-4">No tracking information added yet</p>
               </div>
            </div>
          </div>

          {/* Right Column — Tabs */}
          <div className="flex-1 flex flex-col bg-white overflow-hidden">
            <div className="flex border-b border-gray-100 px-5">
              {['Overview', 'Activity Log'].map(t => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`py-4 text-[13px] font-bold transition-all relative mr-6 last:mr-0 ${tab === t ? 'text-blue-600' : 'text-gray-400'}`}
                >
                  {t}
                  {tab === t && <div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-blue-600 rounded-full" />}
                </button>
              ))}
            </div>

            <div className="flex-1 overflow-y-auto p-5">
               {tab === 'Overview' ? (
                 <div className="space-y-8">
                    {/* Order Details */}
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Order Details</h4>
                      <div className="space-y-3">
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Order Status</span>
                            <div className="flex items-center gap-1.5">
                               <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                               <span className="text-[13px] font-bold text-blue-500">Shipped</span>
                            </div>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Payment Status</span>
                            <div className="flex items-center gap-1.5">
                               <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                               <span className="text-[13px] font-bold text-orange-500">Pending</span>
                            </div>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Total</span>
                            <span className="text-[13px] font-bold text-gray-900">£130.00</span>
                         </div>
                         <div className="flex justify-between items-center">
                            <span className="text-[13px] text-gray-500">Your Profit</span>
                            <span className="text-[13px] font-bold text-green-600">£10.99</span>
                         </div>
                      </div>
                    </div>

                    {/* Customer */}
                    <div className="space-y-4">
                      <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">Customer</h4>
                      <div className="space-y-3">
                         <div className="flex items-center gap-3">
                            <Mail size={16} className="text-gray-400" />
                            <span className="text-[13px] text-blue-600 truncate">hello@PrimeGoods.com</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <Phone size={16} className="text-gray-400" />
                            <span className="text-[13px] text-orange-500">Pending</span>
                         </div>
                         <div className="flex items-center gap-3">
                            <MapPin size={16} className="text-gray-400" />
                            <span className="text-[13px] text-gray-900 leading-tight">£65.94</span>
                         </div>
                      </div>
                    </div>

                    {/* Customer Note Section */}
                    <div className="space-y-4 pt-2">
                       <h4 className="text-[13px] font-bold text-gray-900">Customer</h4>
                       <div className="relative">
                          <textarea 
                             placeholder="Enter your note here..."
                             className="w-full h-[120px] p-4 text-[13px] bg-white border border-gray-200 rounded-xl focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none transition-all placeholder:text-gray-300"
                          />
                          <span className="absolute bottom-3 right-4 text-[10px] text-gray-400 font-medium">300/300</span>
                       </div>
                       <button className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-[13px] font-bold transition-all shadow-sm shadow-blue-200">
                          Add Note
                       </button>
                    </div>
                 </div>
               ) : (
                 <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                         <MessageSquare size={18} className="text-orange-500" />
                      </div>
                      <div className="flex-1">
                         <p className="text-[13px] font-bold text-gray-900">Add note</p>
                         <p className="text-[12px] text-gray-500 mt-1 leading-relaxed">
                            Your transfer of $500 to John Doe was successful
                         </p>
                         <p className="text-[11px] text-gray-400 mt-2 font-medium">Feb 18 · 11:51 AM</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0">
                         <Edit size={18} className="text-gray-400" />
                      </div>
                      <div className="flex-1">
                         <p className="text-[13px] font-bold text-gray-900">Status changed to cancelled</p>
                         <p className="text-[11px] text-gray-400 mt-2 font-medium">Feb 16 · 11:51 AM</p>
                      </div>
                    </div>
                 </div>
               )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-5 border-t border-gray-100 flex items-center justify-between bg-white flex-shrink-0">
          <span className="text-[13px] font-bold text-gray-400">Admin View</span>
          <button
            onClick={onOpenEmail}
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-[13px] font-bold flex items-center gap-2 transition-all shadow-lg shadow-blue-500/20"
          >
            <Mail size={16} /> Send Email
          </button>
        </div>
      </div>
    </div>
  );
}