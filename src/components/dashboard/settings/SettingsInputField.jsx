// 'use client'

// export default function SettingsInputField({ label, value, onChange, placeholder, hint, type = "text" }) {
//   return (
//     <div className="w-full">
//       <label className="text-sm text-gray-600 mb-1.5 block font-medium">{label}</label>
//       <input
//         type={type}
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         placeholder={placeholder}
//         className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
//       />
//       {hint && <p className="text-xs text-gray-400 mt-1 font-medium">{hint}</p>}
//     </div>
//   );
// }
'use client'

export default function SettingsInputField({ label, value, onChange, placeholder, hint, type = "text" }) {
  return (
    <div className="w-full">
      <label className="text-sm text-gray-600 mb-1.5 block font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all"
      />
      {hint && <p className="text-xs text-gray-400 mt-1 font-medium">{hint}</p>}
    </div>
  );
}