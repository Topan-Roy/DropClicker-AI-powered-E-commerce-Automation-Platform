

// import UserSidebar from '@/components/user-dashboard/UserSidebar';
// import UserHeader from '@/components/user-dashboard/UserHeader';
// import { UserNavigationProvider } from '@/context/UserNavigationContext';

// export default function DashboardLayout({ children }) {
//   return (
//     <UserNavigationProvider>
//       <div className="flex min-h-screen bg-[#f8f9fa]">
//         {/* Sidebar: Fixed width, occupies the left side */}
//         <UserSidebar />
        
//         {/* Main Content: 
//            - ml-64 shifts content to the right of the sidebar
//            - w-full ensures it takes up the remaining space
//         */}
//         <main className="flex-1 ml-64">
//           <div className="p-6 lg:p-8 w-full max-w-(--break-2xl) mx-auto">
//             {/* Header: Sits at the top of the content area */}
//             <UserHeader />
            
//             {/* Page Content:
//                This is where your Dashboard, Products, or AI Tools 
//                components will render.
//             */}
//             <div className="mt-2">
//               {children}
//             </div>
//           </div>
//         </main>
//       </div>
//     </UserNavigationProvider>
//   );
// }

import UserSidebar from '@/components/user-dashboard/UserSidebar';
import UserHeader from '@/components/user-dashboard/UserHeader';
import { UserNavigationProvider } from '@/context/UserNavigationContext';

export default function DashboardLayout({ children }) {
  return (
    <UserNavigationProvider>
      <div className="flex min-h-screen bg-[#f8f9fa]">
        <UserSidebar />

        {/* lg:ml-64 — only offset on desktop where sidebar is always visible */}
        <main className="flex-1 lg:ml-64 w-full min-w-0">
          <div className="p-4 sm:p-6 lg:p-8 w-full mx-auto">
            <UserHeader />
            <div className="mt-2">
              {children}
            </div>
          </div>
        </main>
      </div>
    </UserNavigationProvider>
  );
}