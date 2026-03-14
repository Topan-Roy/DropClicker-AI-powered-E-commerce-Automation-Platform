// 'use client'
// import IOSToggle from './IOSToggle';

// export default function SettingsToggleRow({ title, description, value, onChange, bgColor = 'bg-white' }) {
//   return (
//     <div className={`flex items-center justify-between px-4 py-4 rounded-xl border border-transparent transition-all ${bgColor}`}>
//       <div>
//         <p className="text-sm font-bold text-gray-900">{title}</p>
//         <p className="text-sm text-gray-500">{description}</p>
//       </div>
//       <IOSToggle value={value} onChange={onChange} />
//     </div>
//   );
// }
'use client'
import IOSToggle from './IOSToggle';

export default function SettingsToggleRow({ title, description, value, onChange, bgColor = 'bg-white' }) {
  return (
    <div className={`flex items-center justify-between gap-4 px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-transparent transition-all ${bgColor}`}>
      <div className="min-w-0">
        <p className="text-sm font-bold text-gray-900">{title}</p>
        <p className="text-xs sm:text-sm text-gray-500 mt-0.5">{description}</p>
      </div>
      {/* flex-shrink-0 keeps the toggle from squishing */}
      <div className="flex-shrink-0">
        <IOSToggle value={value} onChange={onChange} />
      </div>
    </div>
  );
}