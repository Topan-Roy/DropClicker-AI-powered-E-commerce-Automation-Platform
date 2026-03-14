import { CreditCard, Eye } from 'lucide-react';

export default function OrdersTable({ orders, onView, onPay }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead className="bg-gray-50 border-b border-gray-100">
          <tr>
            {['Order', 'Date', 'Customer', 'Stats', 'Items', 'Total', 'Payment', 'Action'].map((head) => (
              <th key={head} className="text-[10px] font-black text-gray-400 uppercase px-5 py-4 tracking-wider">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-50">
          {orders.map((order) => (
            <tr key={order.id} className="hover:bg-gray-50/50 transition-colors">
              <td className="px-5 py-4 text-sm font-bold text-gray-900">{order.id}</td>
              <td className="px-5 py-4 text-sm text-gray-500 font-medium">{order.date}</td>
              <td className="px-5 py-4 text-sm text-gray-900 font-bold">{order.customer}</td>
              <td className="px-5 py-4">
                <div className={`flex items-center gap-2 text-sm font-bold ${
                  order.status === 'Shipped' ? 'text-blue-600' : 'text-red-500'
                }`}>
                  <div className={`w-2 h-2 rounded-full ${order.status === 'Shipped' ? 'bg-blue-500' : 'bg-red-500'}`} />
                  {order.status}
                </div>
              </td>
              <td className="px-5 py-4 text-sm text-gray-500 font-bold">{order.items} Items</td>
              <td className="px-5 py-4 text-sm font-black text-gray-900">{order.total}</td>
              <td className="px-5 py-4">
                <button 
                  onClick={() => onPay(order)}
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-1.5 text-xs font-black flex items-center gap-2 transition-all active:scale-95"
                >
                  <CreditCard size={13} strokeWidth={3} /> Pay
                </button>
              </td>
              <td className="px-5 py-4">
                <button 
                  onClick={() => onView(order)}
                  className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-blue-500 hover:bg-blue-50 hover:border-blue-100 transition-all"
                >
                  <Eye size={15} strokeWidth={2.5} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}