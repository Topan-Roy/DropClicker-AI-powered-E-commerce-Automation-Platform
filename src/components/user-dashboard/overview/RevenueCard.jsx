

'use client';
import { TrendingUp, Package, ShoppingCart, ArrowUp } from 'lucide-react';

const icons = { Package, ShoppingCart };

export default function RevenueCard({ revenue, stats }) {
  if (!revenue) return null;

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* Revenue Card - Wider */}
      <div className="flex-[1.5] bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between">
        <div>
          <p className="text-sm font-bold text-gray-400 mb-1">Revenue</p>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{revenue.amount}</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 bg-blue-500 text-white rounded-full px-3 py-1 text-xs font-bold">
            <TrendingUp size={12} /> {revenue.growthPercent}
          </div>
          <div className="bg-blue-600 text-white rounded-full px-3 py-1 text-xs font-bold">
            {revenue.growthAmount}
          </div>
        </div>
      </div>

      {/* Stat Cards */}
      {stats.map((stat) => {
        const Icon = icons[stat.icon] || Package;
        const iconColor =
          stat.color === 'blue' ? 'text-blue-600 bg-blue-50' :
            stat.color === 'green' ? 'text-green-600 bg-green-50' :
              stat.color === 'orange' ? 'text-orange-500 bg-orange-50' :
                'text-blue-600 bg-blue-50';

        return (
          <div
            key={stat.id}
            className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2.5 rounded-lg ${iconColor}`}>
                <Icon size={20} />
              </div>
              <span className="text-sm font-bold text-gray-600 truncate">{stat.label}</span>
            </div>
            <div className="flex items-end justify-between">
              <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
              {stat.trend && (
                <div className="flex items-center gap-0.5 text-green-500 font-bold text-sm mb-1">
                  <ArrowUp size={14} /> {stat.trend}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}