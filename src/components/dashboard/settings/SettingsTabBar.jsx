// 'use client'

// export default function SettingsTabBar({ tabs, activeTab, onTabChange }) {
//   return (
//     <div className="flex gap-1 bg-gray-200/60 rounded-xl p-1 w-fit mb-8">
//       {tabs.map((tab) => (
//         <button
//           key={tab}
//           onClick={() => onTabChange(tab)}
//           className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
//             activeTab === tab 
//               ? 'bg-white text-gray-900 shadow-sm font-bold' 
//               : 'text-gray-500 hover:text-gray-700'
//           }`}
//         >
//           {tab}
//         </button>
//       ))}
//     </div>
//   );
// }
'use client'

export default function SettingsTabBar({ tabs, activeTab, onTabChange }) {
  return (
    /* 
      Mobile:  horizontally scrollable, full width
      sm+:     shrinks to w-fit pill (original look)
    */
    <div className="mb-6 sm:mb-8 -mx-4 sm:mx-0 px-4 sm:px-0 overflow-x-auto">
      <div className="flex gap-1 bg-gray-200/60 rounded-xl p-1 w-max sm:w-fit min-w-full sm:min-w-0">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`px-4 sm:px-5 py-1.5 rounded-lg text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === tab
                ? 'bg-white text-gray-900 shadow-sm font-bold'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}