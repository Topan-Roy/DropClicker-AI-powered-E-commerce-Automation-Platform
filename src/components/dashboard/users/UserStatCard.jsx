'use client';
import * as Icons from 'lucide-react';
import { ArrowUp } from 'lucide-react';

export default function UserStatCard({ label, value, icon, color, trend }) {
  const Icon = Icons[icon];
  
  const colors = {
    blue: "bg-blue-50 text-blue-600",
    green: "bg-green-50 text-green-600",
    orange: "bg-orange-50 text-orange-600",
    yellow: "bg-yellow-50 text-yellow-600"
  };

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
          <Icon size={20} />
        </div>
        <p className="text-sm font-bold text-gray-900">{label}</p>
      </div>
      
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-gray-900 leading-none">{value}</h3>
        {trend && (
          <div className="flex items-center gap-0.5 bg-green-50 px-2 py-1 rounded-full text-green-500 text-sm font-semibold">
            <ArrowUp size={12} strokeWidth={3} />
            <span>{trend}</span>
          </div>
        )}
      </div>
    </div>
  );
}