'use client';
import { useState, useEffect, useMemo } from 'react';
import { Calendar, ChevronDown, Plus } from 'lucide-react';
import OrderStatCards from '@/components/user-dashboard/user-orders/OrderStatCards';
import OrderFilterTabs from '@/components/user-dashboard/user-orders/OrderFilterTabs';
import OrdersTable from '@/components/user-dashboard/user-orders/OrdersTable';
import SupplierDetailsPanel from '@/components/user-dashboard/user-orders/SupplierDetailsPanel';
import CompletePaymentModal from '@/components/user-dashboard/user-orders/CompletePaymentModal';
import { fetchOrderStats, fetchOrders, fetchSupplierDetails, exportOrders } from '@/services/userOrdersService';

export default function UserOrdersPage() {
  const [stats, setStats] = useState([]);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [dateRange, setDateRange] = useState('Jan 1 - Jan 30, 2024');
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [supplierDetails, setSupplierDetails] = useState(null);
  const [loadingSupplier, setLoadingSupplier] = useState(false);

  useEffect(() => {
    Promise.all([fetchOrderStats(), fetchOrders()])
      .then(([st, ord]) => { setStats(st); setOrders(ord); })
      .finally(() => setLoading(false));
  }, []);

  const handleViewOrder = async (order) => {
    setSelectedOrder(order);
    setLoadingSupplier(true);
    const details = await fetchSupplierDetails(order.id);
    setSupplierDetails(details);
    setLoadingSupplier(false);
  };

  const filteredOrders = useMemo(() => {
    let data = [...orders];
    if (activeFilter !== 'All') {
      const map = { 'In Stock': 'Shipped', 'Low Stock': 'Processing', 'Out of Stock': 'Cancelled' };
      data = data.filter(o => o.status === (map[activeFilter] || activeFilter));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      data = data.filter(o =>
        o.id.toLowerCase().includes(q) || o.customer.toLowerCase().includes(q)
      );
    }
    return data;
  }, [orders, activeFilter, searchQuery]);

  if (loading) return (
    <div className="flex justify-center items-center min-h-[60vh]">
      <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  return (
    <div className="space-y-6 max-w-[1600px] mx-auto pb-10">
      {/* Top Header Row */}
      <div className="flex items-center justify-between">
        <button className="flex items-center gap-2 border border-gray-200 rounded-xl px-4 py-2.5 text-sm font-bold text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all">
          <Calendar size={15} className="text-gray-400" />
          {dateRange}
          <ChevronDown size={15} className="text-gray-400" />
        </button>

        <div className="flex items-center gap-3">
          <button 
            onClick={exportOrders}
            className="flex items-center gap-2 border border-gray-200 rounded-xl px-5 py-2.5 text-sm font-black text-gray-700 bg-white hover:bg-gray-50 shadow-sm transition-all"
          >
            <Plus size={15} /> Export
          </button>
          <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-5 py-2.5 text-sm font-black shadow-lg shadow-blue-100 transition-all active:scale-95">
            <Plus size={15} strokeWidth={3} /> Create order
          </button>
        </div>
      </div>

      <OrderStatCards stats={stats} />

      <OrderFilterTabs 
        activeFilter={activeFilter} 
        onFilter={setActiveFilter} 
        searchQuery={searchQuery} 
        onSearch={setSearchQuery} 
      />

      <OrdersTable 
        orders={filteredOrders} 
        onView={handleViewOrder} 
        onPay={(order) => { 
          handleViewOrder(order);
          setShowPaymentModal(true); 
        }} 
      />

      {/* Slide-in Overlay Logic */}
      {selectedOrder && (
        <>
          <div 
            className={`fixed inset-0 bg-black/20 backdrop-blur-[1px] transition-opacity z-30 ${showPaymentModal ? 'opacity-0' : 'opacity-100'}`} 
            onClick={() => setSelectedOrder(null)} 
          />
          {!showPaymentModal && (
            <SupplierDetailsPanel 
              supplier={supplierDetails} 
              loading={loadingSupplier} 
              onClose={() => setSelectedOrder(null)} 
              onPayOrder={() => setShowPaymentModal(true)} 
            />
          )}
        </>
      )}

      {/* Modal on top of everything */}
      {showPaymentModal && (
        <CompletePaymentModal 
          supplier={supplierDetails} 
          onClose={() => setShowPaymentModal(false)} 
          onSubmit={() => {
            setShowPaymentModal(false);
            setSelectedOrder(null);
          }} 
        />
      )}
    </div>
  );
}