// 'use client'
// import { Save } from 'lucide-react';

// export default function SettingsCard({ title, subtitle, children, onSave }) {
//   return (
//     <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 max-w-4xl animate-in fade-in slide-in-from-bottom-2 duration-300">
//       <div className="flex items-start justify-between mb-5 pb-4 border-b border-gray-100">
//         <div>
//           <h2 className="text-base font-bold text-gray-900">{title}</h2>
//           <p className="text-sm text-gray-400">{subtitle}</p>
//         </div>
//         <button
//           onClick={onSave}
//           className="bg-blue-600 text-white rounded-xl px-4 py-2 text-sm font-bold flex items-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 cursor-pointer"
//         >
//           <Save size={16} /> Save Changes
//         </button>
//       </div>
//       <div className="space-y-6">
//         {children}
//       </div>
//     </div>
//   );
// }
'use client'
import { Save } from 'lucide-react';

export default function SettingsCard({ title, subtitle, children, onSave }) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 sm:p-6 max-w-4xl animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Header: stacks on mobile, side-by-side on sm+ */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-5 pb-4 border-b border-gray-100">
        <div>
          <h2 className="text-base font-bold text-gray-900">{title}</h2>
          <p className="text-sm text-gray-400 mt-0.5">{subtitle}</p>
        </div>
        <button
          onClick={onSave}
          className="self-start sm:self-auto bg-blue-600 text-white rounded-xl px-4 py-2 text-sm font-bold flex items-center gap-2 hover:bg-blue-700 active:scale-95 transition-all shadow-lg shadow-blue-100 cursor-pointer flex-shrink-0"
        >
          <Save size={16} /> Save Changes
        </button>
      </div>
      <div className="space-y-4 sm:space-y-6">
        {children}
      </div>
    </div>
  );
}