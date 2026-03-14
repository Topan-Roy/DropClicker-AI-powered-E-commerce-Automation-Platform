// 'use client';
// import React from 'react';
// import { Share2, Clock, Globe, ArrowRight } from 'lucide-react';

// export default function HowItWorks() {
//   const features = [
//     { icon: <Share2 size={20} className="text-blue-600" />, title: 'Import products in 1-click', bg: 'bg-blue-100' },
//     { icon: <Globe size={20} className="text-orange-500" />, title: 'Sell on your store globally', bg: 'bg-orange-100' },
//     { icon: <Clock size={20} className="text-blue-600" />, title: 'Automated 24h fulfillment', bg: 'bg-blue-100' },
//     { icon: <span className="text-green-600 font-bold">$</span>, title: 'Keep 100% of your retail profit', bg: 'bg-green-100' },
//   ];

//   return (
//     <section className="relative w-full bg-white overflow-hidden" id="how-it-works">
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

//       <div className="relative z-10 w-full max-w-7xl mx-auto flex">
//         {/* Left Column */}
//         <div className="w-1/2 flex flex-col items-start pl-16 py-20 max-w-[480px]">
//           <span className="border border-gray-200 rounded-full px-3 py-1 text-xs text-gray-500 bg-white mb-4 shadow-sm">
//             How It Works
//           </span>
//           <h2 className="text-4xl font-bold text-gray-900 leading-tight">
//             Run your store on autopilot
//           </h2>
//           <p className="text-sm text-gray-500 max-w-md mt-3 mb-8 leading-relaxed">
//             With DropClicker, running an e-commerce brand is easier than ever. We handle the sourcing, quality control, and shipping while you focus on scaling.
//           </p>

//           <div className="flex flex-col gap-5 w-full">
//             {features.map((item, idx) => (
//               <div key={idx} className="flex items-center gap-4">
//                 <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.bg}`}>
//                   {item.icon}
//                 </div>
//                 <span className="text-sm font-semibold text-gray-800">{item.title}</span>
//               </div>
//             ))}
//           </div>

//           <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 py-3 mt-8 font-semibold flex items-center gap-2 transition-colors">
//             Join Us Free Trial <ArrowRight size={18} />
//           </button>
//         </div>

//         {/* Right Column Image (Bleeding to edge) */}
//         <div className="absolute right-0 top-0 bottom-0 w-1/2 flex justify-end items-center" style={{ marginRight: 0, paddingRight: 0 }}>
//           <img
//             src="/dashboard-mockup.png"
//             alt="Dashboard Layout"
//             className="h-full w-auto object-cover object-left"
//             style={{ marginRight: 0, paddingRight: 0 }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }


'use client';

import React from 'react';
import { Zap, RefreshCw, ShoppingCart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const features = [
    {
      icon: <Zap size={20} className="text-blue-600" />,
      title: "One-click product imports",
      bg: "bg-blue-100"
    },
    {
      icon: <RefreshCw size={20} className="text-orange-500" />,
      title: "Real-time inventory sync",
      bg: "bg-orange-100"
    },
    {
      icon: <ShoppingCart size={20} className="text-blue-600" />,
      title: "Automatic order fulfillment",
      bg: "bg-blue-100"
    },
    {
      icon: <ShieldCheck size={20} className="text-green-600" />,
      title: "UK VAT compliance built-in",
      bg: "bg-green-100"
    },
  ];

  return (
    <section className="relative w-full bg-white overflow-hidden" id="how-it-works">
      {/* Background Grid Layer */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)`,
          backgroundSize: '110px 110px',
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="relative w-full lg:w-1/2 flex flex-col items-start py-14 max-w-[480px]">
          {/* Section Label Badge */}
          <div className="border border-gray-200 rounded-full px-3 py-1 text-xs text-[#0C0407] bg-white shadow-sm mb-4">
            How It Works
          </div>

          {/* Floating Icon */}
          <img src="/image2.png" alt="icon" className="absolute top-25 right-0 w-12 h-12 object-contain" />

          {/* Heading */}
          <h2 className="text-3xl font-bold text-gray-900 leading-tight mb-4">
            Run your store on autopilot
          </h2>


          <p className="text-sm text-gray-500 max-w-md mb-8 leading-relaxed">
            Connect your store, import products from verified UK suppliers, and let our system handle orders, tracking, and inventory automatically.
          </p>

          {/* Feature List */}
          <div className="flex flex-col gap-5 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className={`w-10 h-10 ${feature.bg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  {feature.icon}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  {feature.title}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="bg-[#2D6FFC] hover:bg-blue-600 text-white rounded-full px-6 py-3.5 mt-10 font-semibold flex items-center gap-2 transition-colors shadow-lg shadow-blue-200">
            Join Us Free Trial <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Right Column Dashboard Mockup — Bleeds to Right Edge */}
      <div className="absolute  right-0 top-10 bottom-10 w-1/2 hidden lg:flex items-center justify-end overflow-hidden pointer-events-none">
        <img
          src="/dashboard-mockup.png"
          alt="Dashboard"
          className="h-full w-auto object-cover object-left"
          style={{ display: 'block', marginRight: 0 }}
        />
      </div>
    </section>
  );
}