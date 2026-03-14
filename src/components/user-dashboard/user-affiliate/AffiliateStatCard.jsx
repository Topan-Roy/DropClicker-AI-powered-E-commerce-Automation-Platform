'use client'
import * as Icons from 'lucide-react';

export default function AffiliateStatCard({ label, value, icon, color, trend }) {
  const IconComponent = Icons[icon];
  
  const colorMap = {
    blue: 'bg-blue-50 text-blue-600',
    yellow: 'bg-orange-50 text-orange-500',
    green: 'bg-green-50 text-green-600'
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 transition-all hover:shadow-md">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${colorMap[color] || colorMap.blue}`}>
          <IconComponent size={20} />
        </div>
        <span className="text-sm text-gray-500 font-medium">{label}</span>
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 tracking-tight">{value}</h3>
        {trend && (
          <div className="flex items-center gap-0.5 text-green-500 text-sm font-semibold mb-1">
            <Icons.ArrowUp size={14} strokeWidth={3} />
            <span>{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
}