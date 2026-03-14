'use client'
import IOSToggle from './IOSToggle';

export default function ToggleRow({ title, description, value, onChange, bgColor = 'bg-transparent' }) {
  return (
    <div className={`flex items-center justify-between px-6 py-4 rounded-xl border-b border-gray-50 last:border-b-0 ${bgColor}`}>
      <div>
        <h4 className="text-sm font-bold text-gray-900">{title}</h4>
        <p className="text-sm text-gray-400 mt-0.5">{description}</p>
      </div>
      <IOSToggle value={value} onChange={onChange} />
    </div>
  );
}