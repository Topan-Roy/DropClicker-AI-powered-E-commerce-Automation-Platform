 
'use client'
import { useState, useMemo } from 'react';
import { Calendar, Download, ExternalLink } from 'lucide-react';
import { orderStatsData, ordersTableData } from '@/data/ordersData';
import OrderStatusBadge from '@/components/dashboard/orders/OrderStatusBadge';
import SupplierDetailsModal from '@/components/dashboard/orders/SupplierDetailsModal';
import SendEmailModal from '@/components/dashboard/orders/SendEmailModal';
import OrdersToolbar from '@/components/dashboard/orders/OrdersToolbar';

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('All Status');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showSupplierModal, setShowSupplierModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  const filteredData = useMemo(() => {
    let data = [...ordersTableData];
    if (searchQuery) {
      data = data.filter(o =>
        o.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        o.orderNo.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterStatus !== 'All Status') data = data.filter(o => o.status === filterStatus);
    return data;
  }, [searchQuery, filterStatus]);

  const openOrder = (order) => {
    setSelectedOrder(order);
    setShowSupplierModal(true);
  };

  return (
    <div className="p-4 sm:p-6 bg-[#F9FAFB] min-h-screen space-y-4 sm:space-y-6">

      {/* ── Top Header ── */}
      <div className="flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 w-full sm:w-auto justify-center sm:justify-start">
          <Calendar size={16} className="text-gray-400 flex-shrink-0" />
          <span>Jan 1 - Jan 30, 2024</span>
        </button>
        <button className="flex items-center justify-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 hover:bg-gray-50 shadow-sm w-full sm:w-auto">
          <Download size={16} className="flex-shrink-0" />
          Export Orders
        </button>
      </div>

      {/* ── Stats Grid: 2 cols mobile, 4 cols desktop ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        {orderStatsData.map(stat => (
          <div key={stat.id} className="bg-white p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex justify-between items-start mb-3 sm:mb-4">
              <p className="text-xs sm:text-sm font-bold text-gray-500 leading-tight pr-1">{stat.label}</p>
              {stat.trend && (
                <span className="bg-green-50 text-green-600 text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0">
                  {stat.trend}%
                </span>
              )}
            </div>
            <p className="text-xl sm:text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* ── Toolbar ── */}
      <OrdersToolbar
        searchQuery={searchQuery}
        onSearch={setSearchQuery}
        onFilterToggle={() => {}}
      />

      {/* ── Table: hidden on mobile, replaced by cards ── */}
      <div className="hidden md:block bg-white rounded-2xl border border-gray-100 shadow-sm overflow-x-auto">
        <table className="w-full text-left min-w-[600px]">
          <thead>
            <tr className="bg-slate-50 border-b border-gray-100 text-xs font-bold text-gray-500 uppercase">
              <th className="px-6 py-4">Order</th>
              <th className="px-6 py-4">Customer</th>
              <th className="px-6 py-4">Stats</th>
              <th className="px-6 py-4">Items</th>
              <th className="px-6 py-4">Total</th>
              <th className="px-6 py-4 text-right pr-10">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {filteredData.map(order => (
              <tr key={order.id} className="hover:bg-gray-50/50">
                <td className="px-6 py-4">
                  <p className="text-sm font-bold">{order.orderNo}</p>
                  <p className="text-xs text-gray-400">{order.date}</p>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img src={order.avatar} className="w-10 h-10 rounded-full flex-shrink-0" alt="" />
                    <div className="min-w-0">
                      <p className="text-sm font-bold truncate">{order.customerName}</p>
                      <p className="text-xs text-gray-400 truncate">{order.customerEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4"><OrderStatusBadge status={order.status} /></td>
                <td className="px-6 py-4 text-sm font-medium text-gray-500">{order.items} Items</td>
                <td className="px-6 py-4 text-sm font-bold text-gray-900">{order.total}</td>
                <td className="px-6 py-4 text-right pr-6">
                  <button onClick={() => openOrder(order)} className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Mobile order cards ── */}
      <div className="md:hidden space-y-3">
        {filteredData.map(order => (
          <div key={order.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
            {/* Row 1: avatar + name + action */}
            <div className="flex items-center gap-3">
              <img src={order.avatar} className="w-10 h-10 rounded-full flex-shrink-0" alt="" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 truncate">{order.customerName}</p>
                <p className="text-xs text-gray-400 truncate">{order.customerEmail}</p>
              </div>
              <button
                onClick={() => openOrder(order)}
                className="bg-blue-100 text-blue-600 p-2 rounded-full hover:bg-blue-200 transition-colors flex-shrink-0"
              >
                <ExternalLink size={16} />
              </button>
            </div>

            {/* Row 2: order no + date + status */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
              <div>
                <p className="text-sm font-bold text-gray-900">{order.orderNo}</p>
                <p className="text-xs text-gray-400">{order.date}</p>
              </div>
              <OrderStatusBadge status={order.status} />
            </div>

            {/* Row 3: items + total */}
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-50">
              <span className="text-xs text-gray-400 font-medium">{order.items} Items</span>
              <span className="text-sm font-bold text-gray-900">{order.total}</span>
            </div>
          </div>
        ))}
      </div>

      <SupplierDetailsModal
        isOpen={showSupplierModal} onClose={() => setShowSupplierModal(false)}
        order={selectedOrder} onOpenEmail={() => setShowEmailModal(true)}
      />
      <SendEmailModal
        isOpen={showEmailModal} onClose={() => setShowEmailModal(false)}
      />
    </div>
  );
}

