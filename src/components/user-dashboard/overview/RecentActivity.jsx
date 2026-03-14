

'use client';
import { ShoppingCart, Package, CreditCard, AlertCircle } from 'lucide-react';

const activityIcons = { ShoppingCart, Package, CreditCard, AlertCircle };

export default function RecentActivity({ activities }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6">
      <div className="mb-4 sm:mb-6">
        <h3 className="font-bold text-gray-900">Recent Activity</h3>
        <p className="text-xs text-gray-400">Latest events and updates from your dashboard</p>
      </div>

      <div className="space-y-5">
        {activities.map((item) => {
          const Icon = activityIcons[item.icon] || AlertCircle;
          
          // Color mapping
          let colors = 'bg-gray-50 text-gray-500';
          if (item.title.toLowerCase().includes('order')) colors = 'bg-green-50 text-green-500';
          if (item.title.toLowerCase().includes('package') || item.title.toLowerCase().includes('delivered')) colors = 'bg-purple-50 text-purple-500';
          if (item.title.toLowerCase().includes('payment')) colors = 'bg-green-50 text-green-500';
          if (item.title.toLowerCase().includes('low stock') || item.title.toLowerCase().includes('alert')) colors = 'bg-red-50 text-red-500';

          return (
            <div key={item.id} className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${colors}`}>
                <Icon size={18} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-bold text-gray-900 leading-tight">{item.title}</p>
                <p className="text-xs text-gray-500 mt-1">{item.subtitle}</p>
              </div>
              <span className="text-xs font-medium text-gray-400 whitespace-nowrap pt-1 flex-shrink-0">
                {item.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}