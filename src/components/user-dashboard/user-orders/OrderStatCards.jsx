import { ShoppingCart, Package, ArrowUp } from 'lucide-react';

const iconMap = { ShoppingCart, Package };

export default function OrderStatCards({ stats }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => {
        const Icon = iconMap[stat.icon];
        const colorClass = stat.color === 'green' ? 'bg-green-50 text-green-600' : 
                          stat.color === 'blue' ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-500';
        
        return (
          <div key={stat.id} className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className={`${colorClass} w-10 h-10 rounded-xl flex items-center justify-center`}>
                <Icon size={20} />
              </div>
              <span className="text-xs font-bold text-gray-400 uppercase tracking-tight">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <h3 className="text-3xl font-bold text-gray-900 leading-none">{stat.value}</h3>
              {stat.trend && (
                <div className="flex items-center gap-1 text-green-500 text-sm font-bold bg-green-50 px-2 py-1 rounded-lg">
                  <ArrowUp size={13} strokeWidth={3} />
                  {stat.trend}%
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}