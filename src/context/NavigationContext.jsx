// 'use client';

// import React, { createContext, useContext, useState } from 'react';
// import { usePathname } from 'next/navigation';

// const NavigationContext = createContext();

// // mapping between dashboard paths and human‑readable page names
// const nameMap = {
//   '/dashboard': 'Overview',
//   '/dashboard/users': 'Users',
//   '/dashboard/suppliers': 'Supplier Hub',
//   '/dashboard/products': 'Products',
//   '/dashboard/collections': 'Collections',
//   '/dashboard/orders': 'Order',
//   '/dashboard/announcements': 'Announcements',
//   '/dashboard/pages': 'Pages',
//   '/dashboard/settings': 'Settings',
// };

// export function NavigationProvider({ children }) {
//   const pathname = usePathname();

//   const [activePage, setActivePage] = useState(() => {
//     // initialize based on current pathname
//     return nameMap[pathname] || 'Overview';
//   });

//   React.useEffect(() => {
//     if (pathname) {
//       const trimmed = pathname.split('?')[0];
//       setActivePage(nameMap[trimmed] || 'Overview');
//     }
//   }, [pathname]);

//   return (
//     <NavigationContext.Provider value={{ activePage, setActivePage }}>
//       {children}
//     </NavigationContext.Provider>
//   );
// }

// export function useNavigation() {
//   const context = useContext(NavigationContext);
//   if (!context) {
//     throw new Error('useNavigation must be used within a NavigationProvider');
//   }
//   return context;
// }

'use client';

import React, { createContext, useContext, useState } from 'react';
import { usePathname } from 'next/navigation';

const NavigationContext = createContext();

const nameMap = {
  '/dashboard': 'Overview',
  '/dashboard/users': 'Users',
  '/dashboard/suppliers': 'Supplier Hub',
  '/dashboard/products': 'Products',
  '/dashboard/collections': 'Collections',
  '/dashboard/orders': 'Order',
  '/dashboard/announcements': 'Announcements',
  '/dashboard/pages': 'Pages',
  '/dashboard/settings': 'Settings',
};

export function NavigationProvider({ children }) {
  const pathname = usePathname();

  const [activePage, setActivePage] = useState(() => {
    return nameMap[pathname] || 'Overview';
  });

  // ── NEW: controls mobile sidebar drawer ──
  const [sidebarOpen, setSidebarOpen] = useState(false);

  React.useEffect(() => {
    if (pathname) {
      const trimmed = pathname.split('?')[0];
      setActivePage(nameMap[trimmed] || 'Overview');
    }
  }, [pathname]);

  return (
    <NavigationContext.Provider value={{ activePage, setActivePage, sidebarOpen, setSidebarOpen }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
}