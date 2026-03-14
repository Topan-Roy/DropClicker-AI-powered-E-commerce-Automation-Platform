// 'use client';

// import { NavigationProvider } from '@/context/NavigationContext';
// import Header from '@/components/dashboard/Header';
// import Sidebar from '@/components/dashboard/Sidebar';

// export default function DashboardLayout({ children }) {
//   return (
//     <NavigationProvider>
//       <div className="flex min-h-screen bg-white">
//         {/* Sidebar (fixed width: 64) */}
//         <Sidebar />

//         {/* Main layout container adjusted for sidebar */}
//         <div className="flex flex-1 flex-col ml-64">
//           <Header />

//           <main className="p-8">
//             {children}
//           </main>
//         </div>
//       </div>
//     </NavigationProvider>
//   );
// }


'use client';

import { NavigationProvider } from '@/context/NavigationContext';
import Header from '@/components/dashboard/Header';
import Sidebar from '@/components/dashboard/Sidebar';

export default function DashboardLayout({ children }) {
  return (
    <NavigationProvider>
      <div className="flex min-h-screen bg-white">
        <Sidebar />

        {/* lg:ml-64 — only offset on desktop where sidebar is always visible */}
        <div className="flex flex-1 flex-col w-full lg:ml-64 min-w-0">
          <div className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
            <Header />
          </div>
          <main className="px-4 sm:px-6 lg:px-8 pb-8">
            {children}
          </main>
        </div>
      </div>
    </NavigationProvider>
  );
}