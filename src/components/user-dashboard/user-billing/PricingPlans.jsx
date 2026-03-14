// 'use client'
// import { Check } from 'lucide-react';

// export default function PricingPlans({ plans, onGetStarted }) {
//   return (
//     <div className="grid grid-cols-3 gap-6 items-end">
//       {plans.map((plan) => (
//         <div key={plan.id} className="relative">
//           {plan.isPopular && (
//             <div className="bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest text-center py-2 rounded-t-2xl absolute -top-8 left-0 w-full">
//               Most Popular
//             </div>
//           )}
//           <div className={`bg-white p-6 rounded-2xl border ${plan.isPopular ? 'border-blue-500 ring-1 ring-blue-500' : 'border-gray-100'} shadow-sm flex flex-col h-full`}>
//             <div className="flex justify-between items-start mb-2">
//               <h3 className="font-bold text-gray-900">{plan.name}</h3>
//               <div className="flex items-center gap-1">
//                 <span className="text-xs text-gray-400 line-through">£{plan.originalPrice}</span>
//                 <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full">{plan.discount}</span>
//               </div>
//             </div>
//             <div className="mb-1">
//               <span className="text-3xl font-black text-gray-900">£{plan.price}</span>
//               <span className="text-sm text-gray-500 font-medium">/month</span>
//             </div>
//             <p className="text-[11px] text-gray-400 mb-6">{plan.tagline}</p>
            
//             <button 
//               onClick={() => !plan.isCurrent && onGetStarted(plan)}
//               disabled={plan.isCurrent}
//               className={`w-full py-3 rounded-xl text-xs font-bold transition-all mb-6 ${
//                 plan.isCurrent 
//                 ? 'bg-gray-100 text-gray-500 cursor-default' 
//                 : 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-200'
//               }`}
//             >
//               {plan.isCurrent ? 'Current Plan' : 'Get Started'}
//             </button>

//             <ul className="space-y-3 mt-auto border-t border-gray-50 pt-6">
//               {plan.features.map((feat, i) => (
//                 <li key={i} className="flex items-center gap-3 text-xs text-gray-600 font-medium">
//                   <Check size={14} className={plan.isCurrent ? "text-gray-400" : "text-blue-500"} />
//                   {feat}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

'use client'
import { Check } from 'lucide-react';

export default function PricingPlans({ plans, onGetStarted }) {
  return (
    <div className="flex flex-col md:flex-row items-end justify-center gap-6 mb-16 mt-20">
      {plans.map((plan) => {
        const isPopular = plan.isPopular;
        
        return (
          <div 
            key={plan.id} 
            className={`relative w-full max-w-[360px] flex flex-col ${
              isPopular ? 'z-10' : 'z-0'
            }`}
          >
            {/* THE RAINBOW BORDER WRAPPER 
               We use min-h to ensure the side cards and the middle card's white section 
               visually line up at the top and bottom.
            */}
            <div className={`relative flex flex-col rounded-[38px] p-[3px] transition-all duration-500 ${
              isPopular 
              ? 'bg-gradient-to-b from-[#00A3FF] via-[#32D74B] to-[#FFD600] shadow-[0_20px_50px_rgba(0,163,255,0.2)] scale-105' 
              : 'bg-transparent border border-gray-200 shadow-sm'
            }`}>
              
              <div className="bg-white rounded-[35px] flex flex-col h-full overflow-hidden">
                
                {/* 1. MOST POPULAR HEADER (The 'Pop' at the top) */}
                {isPopular && (
                  <div className="bg-gradient-to-r from-[#00A3FF] to-[#1D4ED8] py-4 flex items-center justify-center">
                    <span className="text-white text-base font-bold tracking-wide">Most Popular</span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-grow">
                  {/* 2. TITLE & DISCOUNT ROW */}
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-2xl font-black text-gray-900 tracking-tight">{plan.name}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-400 font-medium line-through">£{plan.originalPrice}</span>
                      <span className="bg-[#E0F9F1] text-[#10B981] text-[11px] font-bold px-3 py-1.5 rounded-full border border-[#10B981]/20">
                        {plan.discount}
                      </span>
                    </div>
                  </div>

                  {/* 3. PRICE SECTION */}
                  <div className="flex items-baseline mb-1">
                    <span className="text-[52px] font-[900] text-gray-900 leading-none tracking-tighter">£{plan.price}</span>
                    <span className="text-gray-400 text-lg font-semibold ml-1">/month</span>
                  </div>
                  
                  <p className="text-[15px] text-gray-400 font-medium mb-8">
                    {plan.tagline}
                  </p>

                  {/* 4. CALL TO ACTION BUTTON */}
                  <button
                    disabled={plan.isCurrent}
                    onClick={() => !plan.isCurrent && onGetStarted(plan)}
                    className={`w-full py-4.5 rounded-2xl text-[16px] font-bold transition-all mb-8 active:scale-[0.97] ${
                      plan.isCurrent
                        ? 'bg-[#D1D5DB] text-[#6B7280] cursor-not-allowed shadow-none'
                        : 'bg-gradient-to-r from-[#2563EB] to-[#3B82F6] text-white shadow-[0_10px_25px_rgba(37,99,235,0.3)] hover:brightness-110'
                    }`}
                  >
                    {plan.isCurrent ? 'Current Plan' : 'Get Started'}
                  </button>

                  {/* 5. DIVIDER LINE */}
                  <div className="h-[1px] bg-gray-100 w-full mb-8" />

                  {/* 6. FEATURES LIST */}
                  <ul className="space-y-5">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-[#EBF5FF] flex items-center justify-center">
                          <Check size={14} className="text-[#3B82F6]" strokeWidth={4} />
                        </div>
                        <span className="text-[#6B7280] text-[15px] font-medium leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}