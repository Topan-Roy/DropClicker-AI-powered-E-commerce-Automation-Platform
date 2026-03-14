

'use client';
import * as Icons from 'lucide-react';

export default function ProductStatCard({ label, value, icon, color }) {
  const Icon = Icons[icon];

  const colors = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    orange: 'bg-orange-50 text-orange-600',
    red: 'bg-red-50 text-red-600',
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${colors[color] || colors.blue}`}>
          {Icon && <Icon size={20} />}
        </div>
        <p className="text-sm font-semibold text-gray-500">{label}</p>
      </div>
      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
    </div>
  );
}