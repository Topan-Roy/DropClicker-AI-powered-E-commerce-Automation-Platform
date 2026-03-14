// 'use client';
// import React from 'react';
// import { Check, X } from 'lucide-react';

// export default function ComparisonTable() {
//   const comparisonData = [
//     { feature: "Product Sourcing", manual: "Hours of research", automated: "1-click import" },
//     { feature: "Inventory Updates", manual: "Manual checking daily", automated: "Real-time sync" },
//     { feature: "Order Fulfillment", manual: "Copy-paste details", automated: "Auto-forwarded" },
//     { feature: "Tracking Numbers", manual: "Manual email sent", automated: "Auto-synced to store" },
//     { feature: "Time Saved per Week", isLast: true }
//   ];

//   return (
//     <section className="relative w-full bg-white overflow-hidden py-20">
//       {/* 1. BACKGROUND GRID */}
//       <div
//         className="absolute inset-0 z-0 pointer-events-none grid"
//         style={{
//           gridTemplateColumns: 'repeat(auto-fill, minmax(110px, 1fr))',
//           gridTemplateRows: 'repeat(auto-fill, minmax(110px, 1fr))'
//         }}
//       >
//         {[...Array(150)].map((_, i) => (
//           <div key={i} className="border-r border-b border-gray-200" style={{ borderColor: '#E5E7EB' }}></div>
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col items-center">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 mb-4">
//             DropClicker vs Manual Work
//           </h2>
//           <p className="text-sm text-gray-500 max-w-md mx-auto leading-relaxed">
//             See how much time and energy you save by automating your dropshipping business.
//           </p>
//         </div>

//         {/* CSS Table */}
//         <div className="w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-white">
//           {/* Header Row */}
//           <div className="grid grid-cols-3">
//             <div className="bg-[#1F2937] text-white font-semibold px-6 py-4 text-sm flex items-center">Feature</div>
//             <div className="bg-[#9CA3AF] text-white font-semibold px-6 py-4 text-sm flex items-center justify-center text-center">Manual Way</div>
//             <div className="bg-[#38BDF8] text-white font-semibold px-6 py-4 text-sm flex items-center justify-center text-center">DropClicker</div>
//           </div>

//           {/* Data Rows */}
//           {comparisonData.map((row, idx) => (
//             <div key={idx} className="grid grid-cols-3 border-t border-gray-200">
//               {/* Feature Col */}
//               <div className="px-6 py-4 bg-white flex items-center text-sm text-gray-700 font-medium">
//                 {row.feature}
//               </div>

//               {/* Manual Col */}
//               <div className="px-6 py-4 bg-white flex items-center justify-center text-center">
//                 {row.isLast ? (
//                   <span className="text-gray-400 font-medium text-base">—</span>
//                 ) : (
//                   <span className="text-sm text-red-400 inline-flex items-center justify-center gap-1.5 font-medium">
//                     <X size={16} strokeWidth={3} /> {row.manual}
//                   </span>
//                 )}
//               </div>

//               {/* DropClicker Col */}
//               <div className="px-6 py-4 bg-blue-50/10 flex items-center justify-center text-center">
//                 {row.isLast ? (
//                   <span className="text-[#38BDF8] font-bold text-base">20+ hours</span>
//                 ) : (
//                   <span className="text-sm text-green-500 inline-flex items-center justify-center gap-1.5 font-medium">
//                     <Check size={16} strokeWidth={3} /> {row.automated}
//                   </span>
//                 )}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import React from 'react';
import { Check, X } from 'lucide-react';

/**
 * ComparisonTable Component
 * Pixel-perfect comparison between Manual Work and DropClicker automation.
 * Features a CSS grid background and exact color matches from the screenshot.
 */
export default function ComparisonTable() {
  const comparisonData = [
    {
      feature: "Product Importing",
      manual: "Hours of copy/paste",
      automated: "1-click import"
    },
    {
      feature: "Order Fulfillment",
      manual: "Manual supplier contact",
      automated: "Fully automated"
    },
    {
      feature: "Inventory Management",
      manual: "Spreadsheet tracking",
      automated: "Real-time sync"
    },
    {
      feature: "Time Saved per Week",
      isLast: true
    }
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden py-24" id="comparison">
      {/* 6. GRID BACKGROUND — CSS PERFORMANCE FIX */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '110px 110px'
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* 2. SECTION HEADER — EXACT TEXT & SIZE */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">
            DropClicker vs Manual Work
          </h2>
          <p className="text-base text-gray-500 max-w-md mx-auto">
            See why UK sellers are switching to automation.
          </p>
        </div>

        {/* 5. TABLE WRAPPER — SHADOW & RADIUS */}
        <div className="relative z-10 w-full max-w-3xl mx-auto rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white">
          
          {/* 3. TABLE HEADER ROW — EXACT COLORS */}
          <div className="grid grid-cols-3">
            <div className="bg-[#1a2332] text-white font-semibold px-6 py-5 text-sm flex items-center">
              Feature
            </div>
            <div className="bg-[#6B7280] text-white font-semibold px-6 py-5 text-sm flex items-center justify-center">
              Manual Way
            </div>
            <div className="bg-[#00B4D8] text-white font-bold px-6 py-5 text-sm flex items-center justify-center">
              DropClicker
            </div>
          </div>

          {/* 4. DATA ROWS — HEIGHT & PADDING */}
          <div className="flex flex-col">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 border-t border-gray-100">
                
                {/* Feature Column */}
                <div className="px-6 py-5 bg-white flex items-center text-sm text-gray-800 font-medium">
                  {row.feature}
                </div>

                {/* Manual Column */}
                <div className="px-6 py-5 bg-white flex items-center justify-center text-center">
                  {row.isLast ? (
                    <span className="text-gray-400 font-bold text-lg tracking-widest">—</span>
                  ) : (
                    <span className="text-sm text-red-400 inline-flex items-center gap-1.5 font-medium">
                      <X size={15} strokeWidth={2.5} className="text-red-400" />
                      {row.manual}
                    </span>
                  )}
                </div>

                {/* DropClicker Column — LIGHT CYAN TINT */}
                <div className="px-6 py-5 bg-[#F0FBFF] flex items-center justify-center text-center">
                  {row.isLast ? (
                    <span className="text-[#00B4D8] font-bold text-xl">20+ hours</span>
                  ) : (
                    <span className="text-sm text-emerald-500 inline-flex items-center gap-1.5 font-medium">
                      <Check size={15} strokeWidth={2.5} className="text-emerald-500" />
                      {row.automated}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}