
// 'use client';

// import React from 'react';
// import { Search, Bell, ShoppingBag } from 'lucide-react';
// import { useNavigation } from '@/context/NavigationContext';

// const Header = () => {
//   // TODO: activePage auto-updates from NavigationContext — replace context with API/router when ready
//   const { activePage } = useNavigation();

//   return (
//     <header className="sticky top-0 z-30 flex items-center justify-between px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
//       {/* Left Side: Dynamic Page Title from Context */}
//       <div className="flex items-center">
//         <h1 className="text-xl font-bold text-gray-900 tracking-tight">
//           {activePage}
//         </h1>
//       </div>

//       {/* Right Side: Status & Tools */}
//       <div className="flex items-center gap-3">
        
//         {/* Connected Status Pill */}
//         <div className="flex items-center gap-2 rounded-full border border-gray-200 px-4 py-1.5 shadow-sm">
//           <div className="flex h-5 w-5 items-center justify-center rounded bg-[#95BF47]/10">
//             {/* <ShoppingBag size={14} className="text-[#5E8E3E]" fill="currentColor" /> */}
//             <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.8329 2.72238 14.5573 2.765 14.4501 2.79696C14.4488 2.79762 14.1818 2.88019 13.7323 3.01935C13.6571 2.77565 13.5465 2.47602 13.3887 2.17506C12.88 1.20427 12.135 0.690902 11.2347 0.68957C11.2334 0.68957 11.2327 0.68957 11.2314 0.68957C11.1688 0.68957 11.1069 0.695563 11.0443 0.700889C11.0177 0.668929 10.991 0.637634 10.9631 0.607006C10.5709 0.187526 10.0682 -0.0168873 9.4656 0.00109045C8.30304 0.0343825 7.14514 0.874008 6.2063 2.36549C5.54579 3.41486 5.04308 4.73322 4.90059 5.75396C3.56558 6.16745 2.63207 6.45642 2.61143 6.46308C1.9376 6.67482 1.91629 6.69546 1.8284 7.33067C1.76315 7.81074 0 21.4445 0 21.4445L14.7757 24L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136ZM12.9926 3.2484C12.6523 3.3536 12.2655 3.47345 11.846 3.60329C11.8373 3.01469 11.7674 2.1957 11.4931 1.48791C12.3753 1.65504 12.8095 2.65314 12.9926 3.2484ZM11.0729 3.84299C10.2986 4.0827 9.45361 4.34437 8.606 4.60671C8.84437 3.69385 9.29647 2.78497 9.85178 2.18904C10.0582 1.96732 10.3472 1.72029 10.6894 1.57913C11.011 2.2503 11.0809 3.20046 11.0729 3.84299ZM9.4889 0.774798C9.7619 0.768805 9.99161 0.828731 10.188 0.957904C9.87376 1.12104 9.57013 1.35541 9.28515 1.66103C8.54674 2.45338 7.98077 3.68319 7.75505 4.86972C7.05126 5.08745 6.36278 5.30119 5.7289 5.49694C6.12907 3.62926 7.69446 0.826733 9.4889 0.774798Z" fill="#95BF47"/>
// <path d="M18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.9215 2.81094 14.8509 2.78432 14.7763 2.773L14.777 23.9993L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256Z" fill="#5E8E3E"/>
// <path d="M11.2267 7.71887L10.483 10.5014C10.483 10.5014 9.65336 10.1239 8.66991 10.1858C7.2277 10.277 7.21238 11.1866 7.22703 11.415C7.3056 12.6594 10.5795 12.9311 10.7633 15.8461C10.9078 18.1393 9.54682 19.708 7.58592 19.8318C5.23217 19.9803 3.93644 18.5921 3.93644 18.5921L4.43516 16.4707C4.43516 16.4707 5.73954 17.4548 6.78358 17.3889C7.4654 17.3456 7.7091 16.791 7.68446 16.3988C7.58192 14.7755 4.9159 14.8713 4.74744 12.204C4.60561 9.95943 6.07979 7.68491 9.33242 7.47983C10.5855 7.39927 11.2267 7.71887 11.2267 7.71887Z" fill="white"/>
// </svg>

//           </div>
//           <span className="text-sm font-semibold text-gray-800">Connected</span>
//           {/* TODO: Map this green dot to a real-time WebSocket connection status */}
//           <div className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
//         </div>

//         <div className="flex items-center gap-2">
//           <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
//             <Search size={18} strokeWidth={2} />
//           </button>

//           <button className="relative flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
//             <Bell size={18} strokeWidth={2} />
//             {/* TODO: Add badge count from Notifications API */}
//             <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

'use client';

import React from 'react';
import { Search, Bell, Menu } from 'lucide-react';
import { useNavigation } from '@/context/NavigationContext';

const Header = () => {
  const { activePage, setSidebarOpen } = useNavigation();

  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-4 sm:px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm mb-4 sm:mb-6">

      {/* Left: Hamburger (mobile/tablet only) + Page Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu size={18} strokeWidth={2} />
        </button>

        <h1 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight truncate">
          {activePage}
        </h1>
      </div>

      {/* Right: Connected status + icon buttons */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

        {/* Connected Status Pill */}
        <div className="flex items-center gap-1.5 sm:gap-2 rounded-full border border-gray-200 px-2.5 sm:px-4 py-1.5 shadow-sm">
          <div className="flex h-5 w-5 items-center justify-center rounded bg-[#95BF47]/10 flex-shrink-0">
            <svg width="14" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.8329 2.72238 14.5573 2.765 14.4501 2.79696C14.4488 2.79762 14.1818 2.88019 13.7323 3.01935C13.6571 2.77565 13.5465 2.47602 13.3887 2.17506C12.88 1.20427 12.135 0.690902 11.2347 0.68957C11.2334 0.68957 11.2327 0.68957 11.2314 0.68957C11.1688 0.68957 11.1069 0.695563 11.0443 0.700889C11.0177 0.668929 10.991 0.637634 10.9631 0.607006C10.5709 0.187526 10.0682 -0.0168873 9.4656 0.00109045C8.30304 0.0343825 7.14514 0.874008 6.2063 2.36549C5.54579 3.41486 5.04308 4.73322 4.90059 5.75396C3.56558 6.16745 2.63207 6.45642 2.61143 6.46308C1.9376 6.67482 1.91629 6.69546 1.8284 7.33067C1.76315 7.81074 0 21.4445 0 21.4445L14.7757 24L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136ZM12.9926 3.2484C12.6523 3.3536 12.2655 3.47345 11.846 3.60329C11.8373 3.01469 11.7674 2.1957 11.4931 1.48791C12.3753 1.65504 12.8095 2.65314 12.9926 3.2484ZM11.0729 3.84299C10.2986 4.0827 9.45361 4.34437 8.606 4.60671C8.84437 3.69385 9.29647 2.78497 9.85178 2.18904C10.0582 1.96732 10.3472 1.72029 10.6894 1.57913C11.011 2.2503 11.0809 3.20046 11.0729 3.84299ZM9.4889 0.774798C9.7619 0.768805 9.99161 0.828731 10.188 0.957904C9.87376 1.12104 9.57013 1.35541 9.28515 1.66103C8.54674 2.45338 7.98077 3.68319 7.75505 4.86972C7.05126 5.08745 6.36278 5.30119 5.7289 5.49694C6.12907 3.62926 7.69446 0.826733 9.4889 0.774798Z" fill="#95BF47"/>
              <path d="M18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.9215 2.81094 14.8509 2.78432 14.7763 2.773L14.777 23.9993L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256Z" fill="#5E8E3E"/>
              <path d="M11.2267 7.71887L10.483 10.5014C10.483 10.5014 9.65336 10.1239 8.66991 10.1858C7.2277 10.277 7.21238 11.1866 7.22703 11.415C7.3056 12.6594 10.5795 12.9311 10.7633 15.8461C10.9078 18.1393 9.54682 19.708 7.58592 19.8318C5.23217 19.9803 3.93644 18.5921 3.93644 18.5921L4.43516 16.4707C4.43516 16.4707 5.73954 17.4548 6.78358 17.3889C7.4654 17.3456 7.7091 16.791 7.68446 16.3988C7.58192 14.7755 4.9159 14.8713 4.74744 12.204C4.60561 9.95943 6.07979 7.68491 9.33242 7.47983C10.5855 7.39927 11.2267 7.71887 11.2267 7.71887Z" fill="white"/>
            </svg>
          </div>
          {/* "Connected" text hidden on small screens, green dot always visible */}
          <span className="hidden sm:inline text-sm font-semibold text-gray-800">Connected</span>
          <div className="h-2 w-2 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.5)] flex-shrink-0"></div>
        </div>

        {/* Search */}
        <button className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
          <Search size={17} strokeWidth={2} />
        </button>

        {/* Bell */}
        <button className="relative flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-700">
          <Bell size={17} strokeWidth={2} />
          <span className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 h-2 w-2 rounded-full border-2 border-white bg-red-500"></span>
        </button>
      </div>
    </header>
  );
};

export default Header;