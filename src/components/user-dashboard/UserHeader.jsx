// 'use client';

// import { Search, Bell, ShoppingBag } from 'lucide-react';
// import { useUserNavigation } from '@/context/UserNavigationContext';


// export default function UserHeader() {
//   const { activePage } = useUserNavigation();

//   // TODO: Fetch Shopify connection status from API on mount
//   // This state will drive the badge text and the color of the status dot
//   const isConnected = false; 

//   return (
//     <header className="flex items-center justify-between px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm mb-6">
//       {/* Left Side: Dynamic Page Title */}
//       <div>
//         <h1 className="text-[20px] font-bold text-[#2d2d2d] tracking-tight">
//           {activePage || 'Dashboard Overview'}
//           {/* TODO: Implement a route-to-title mapper once Next.js dynamic routing is finalized */}
//         </h1>
//       </div>

//       {/* Right Side: Shopify Badge & Action Buttons */}
//       <div className="flex items-center gap-3">
        
//         {/* Shopify Connection Badge */}
//         <div className="flex items-center gap-2.5 border border-gray-200 rounded-full px-4 py-2 transition-all duration-200">
//           <svg width="22" height="24" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg">
// <path d="M18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.8329 2.72238 14.5573 2.765 14.4501 2.79696C14.4488 2.79762 14.1818 2.88019 13.7323 3.01935C13.6571 2.77565 13.5465 2.47602 13.3887 2.17506C12.88 1.20427 12.135 0.690902 11.2347 0.68957C11.2334 0.68957 11.2327 0.68957 11.2314 0.68957C11.1688 0.68957 11.1069 0.695563 11.0443 0.700889C11.0177 0.668929 10.991 0.637634 10.9631 0.607006C10.5709 0.187526 10.0682 -0.0168873 9.4656 0.00109045C8.30304 0.0343825 7.14514 0.874008 6.2063 2.36549C5.54579 3.41486 5.04308 4.73322 4.90059 5.75396C3.56558 6.16745 2.63207 6.45642 2.61143 6.46308C1.9376 6.67482 1.91629 6.69546 1.8284 7.33067C1.76315 7.81074 0 21.4445 0 21.4445L14.7757 24L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136ZM12.9926 3.2484C12.6523 3.3536 12.2655 3.47345 11.846 3.60329C11.8373 3.01469 11.7674 2.1957 11.4931 1.48791C12.3753 1.65504 12.8095 2.65314 12.9926 3.2484ZM11.0729 3.84299C10.2986 4.0827 9.45361 4.34437 8.606 4.60671C8.84437 3.69385 9.29647 2.78497 9.85178 2.18904C10.0582 1.96732 10.3472 1.72029 10.6894 1.57913C11.011 2.2503 11.0809 3.20046 11.0729 3.84299ZM9.4889 0.774798C9.7619 0.768805 9.99161 0.828731 10.188 0.957904C9.87376 1.12104 9.57013 1.35541 9.28515 1.66103C8.54674 2.45338 7.98077 3.68319 7.75505 4.86972C7.05126 5.08745 6.36278 5.30119 5.7289 5.49694C6.12907 3.62926 7.69446 0.826733 9.4889 0.774798Z" fill="#95BF47"/>
// <path d="M18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.9215 2.81094 14.8509 2.78432 14.7763 2.773L14.777 23.9993L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256Z" fill="#5E8E3E"/>
// <path d="M11.2267 7.71887L10.483 10.5014C10.483 10.5014 9.65336 10.1239 8.66991 10.1858C7.2277 10.277 7.21238 11.1866 7.22703 11.415C7.3056 12.6594 10.5795 12.9311 10.7633 15.8461C10.9078 18.1393 9.54682 19.708 7.58592 19.8318C5.23217 19.9803 3.93644 18.5921 3.93644 18.5921L4.43516 16.4707C4.43516 16.4707 5.73954 17.4548 6.78358 17.3889C7.4654 17.3456 7.7091 16.791 7.68446 16.3988C7.58192 14.7755 4.9159 14.8713 4.74744 12.204C4.60561 9.95943 6.07979 7.68491 9.33242 7.47983C10.5855 7.39927 11.2267 7.71887 11.2267 7.71887Z" fill="white"/>
// </svg>

//           <span className="text-[14px] text-gray-800 font-semibold">
//             {isConnected ? 'Connected' : 'Not Connected'}
//           </span>
//           {/* Status Dot: Grey for disconnected, Green for connected */}
//           <span 
//             className={`w-2 h-2 rounded-full mt-0.5 ${
//               isConnected ? 'bg-green-500' : 'bg-[#535a66]'
//             }`} 
//           />
//         </div>

//         {/* Action Buttons Group */}
//         <div className="flex items-center gap-2.5">
//           {/* Search Button */}
//           <button 
//             className="rounded-full border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors group"
//             aria-label="Search"
//           >
//             <Search size={18} className="text-gray-400 group-hover:text-gray-600" />
//             {/* TODO: Add onClick handler to trigger global search modal */}
//           </button>

//           {/* Notification Bell */}
//           <button 
//             className="rounded-full border border-gray-200 p-2.5 hover:bg-gray-50 transition-colors group relative"
//             aria-label="Notifications"
//           >
//             <Bell size={18} className="text-gray-400 group-hover:text-gray-600" />
//             {/* TODO: Add unread notification dot indicator based on real-time API state */}
//           </button>
//         </div>

//       </div>
//     </header>
//   );
// }

'use client';
import { Search, Bell, Menu } from 'lucide-react';
import { useUserNavigation } from '@/context/UserNavigationContext';

export default function UserHeader() {
  const { activePage, setSidebarOpen } = useUserNavigation();
  const isConnected = false;

  return (
    <header className="flex items-center justify-between px-4 sm:px-6 py-3 bg-white rounded-2xl border border-gray-100 shadow-sm mb-4 sm:mb-6">

      {/* Left: Hamburger (mobile/tablet only) + Page Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden flex h-9 w-9 items-center justify-center rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 hover:text-gray-700 transition-colors flex-shrink-0"
          aria-label="Open menu"
        >
          <Menu size={18} strokeWidth={2} />
        </button>

        <h1 className="text-lg sm:text-xl font-bold text-[#2d2d2d] tracking-tight truncate">
          {activePage || 'Dashboard Overview'}
        </h1>
      </div>

      {/* Right: Shopify badge + action buttons */}
      <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">

        {/* Shopify Connection Badge */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 border border-gray-200 rounded-full px-2.5 sm:px-4 py-1.5 sm:py-2 transition-all duration-200">
          {/* Shopify icon — always visible */}
          <svg width="14" height="16" viewBox="0 0 22 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <path d="M18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.8329 2.72238 14.5573 2.765 14.4501 2.79696C14.4488 2.79762 14.1818 2.88019 13.7323 3.01935C13.6571 2.77565 13.5465 2.47602 13.3887 2.17506C12.88 1.20427 12.135 0.690902 11.2347 0.68957C11.2334 0.68957 11.2327 0.68957 11.2314 0.68957C11.1688 0.68957 11.1069 0.695563 11.0443 0.700889C11.0177 0.668929 10.991 0.637634 10.9631 0.607006C10.5709 0.187526 10.0682 -0.0168873 9.4656 0.00109045C8.30304 0.0343825 7.14514 0.874008 6.2063 2.36549C5.54579 3.41486 5.04308 4.73322 4.90059 5.75396C3.56558 6.16745 2.63207 6.45642 2.61143 6.46308C1.9376 6.67482 1.91629 6.69546 1.8284 7.33067C1.76315 7.81074 0 21.4445 0 21.4445L14.7757 24L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136ZM12.9926 3.2484C12.6523 3.3536 12.2655 3.47345 11.846 3.60329C11.8373 3.01469 11.7674 2.1957 11.4931 1.48791C12.3753 1.65504 12.8095 2.65314 12.9926 3.2484ZM11.0729 3.84299C10.2986 4.0827 9.45361 4.34437 8.606 4.60671C8.84437 3.69385 9.29647 2.78497 9.85178 2.18904C10.0582 1.96732 10.3472 1.72029 10.6894 1.57913C11.011 2.2503 11.0809 3.20046 11.0729 3.84299ZM9.4889 0.774798C9.7619 0.768805 9.99161 0.828731 10.188 0.957904C9.87376 1.12104 9.57013 1.35541 9.28515 1.66103C8.54674 2.45338 7.98077 3.68319 7.75505 4.86972C7.05126 5.08745 6.36278 5.30119 5.7289 5.49694C6.12907 3.62926 7.69446 0.826733 9.4889 0.774798Z" fill="#95BF47"/>
            <path d="M18.3399 4.4256C18.2527 4.41828 16.5442 4.39231 16.5442 4.39231C16.5442 4.39231 15.1153 3.0047 14.9741 2.86354C14.9215 2.81094 14.8509 2.78432 14.7763 2.773L14.777 23.9993L21.1797 22.408C21.1797 22.408 18.567 4.74254 18.5503 4.62136C18.5337 4.50018 18.4278 4.43293 18.3399 4.4256Z" fill="#5E8E3E"/>
            <path d="M11.2267 7.71887L10.483 10.5014C10.483 10.5014 9.65336 10.1239 8.66991 10.1858C7.2277 10.277 7.21238 11.1866 7.22703 11.415C7.3056 12.6594 10.5795 12.9311 10.7633 15.8461C10.9078 18.1393 9.54682 19.708 7.58592 19.8318C5.23217 19.9803 3.93644 18.5921 3.93644 18.5921L4.43516 16.4707C4.43516 16.4707 5.73954 17.4548 6.78358 17.3889C7.4654 17.3456 7.7091 16.791 7.68446 16.3988C7.58192 14.7755 4.9159 14.8713 4.74744 12.204C4.60561 9.95943 6.07979 7.68491 9.33242 7.47983C10.5855 7.39927 11.2267 7.71887 11.2267 7.71887Z" fill="white"/>
          </svg>
          {/* Label — hidden on small screens, status dot always visible */}
          <span className="hidden sm:inline text-sm text-gray-800 font-semibold">
            {isConnected ? 'Connected' : 'Not Connected'}
          </span>
          <span className={`w-2 h-2 rounded-full flex-shrink-0 ${isConnected ? 'bg-green-500' : 'bg-[#535a66]'}`} />
        </div>

        {/* Search + Bell */}
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <button
            className="rounded-full border border-gray-200 p-2 sm:p-2.5 hover:bg-gray-50 transition-colors group"
            aria-label="Search"
          >
            <Search size={16} className="text-gray-400 group-hover:text-gray-600 sm:hidden" />
            <Search size={18} className="text-gray-400 group-hover:text-gray-600 hidden sm:block" />
          </button>

          <button
            className="rounded-full border border-gray-200 p-2 sm:p-2.5 hover:bg-gray-50 transition-colors group relative"
            aria-label="Notifications"
          >
            <Bell size={16} className="text-gray-400 group-hover:text-gray-600 sm:hidden" />
            <Bell size={18} className="text-gray-400 group-hover:text-gray-600 hidden sm:block" />
          </button>
        </div>
      </div>
    </header>
  );
}