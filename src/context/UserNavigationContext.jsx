// 'use client';
// import { createContext, useContext, useState } from 'react';

// const UserNavigationContext = createContext();

// export function UserNavigationProvider({ children }) {
//   const [activePage, setActivePage] = useState('Dashboard');
  
//   return (
//     <UserNavigationContext.Provider value={{ activePage, setActivePage }}>
//       {children}
//     </UserNavigationContext.Provider>
//   );
// }

// export function useUserNavigation() {
//   return useContext(UserNavigationContext);
// }

'use client';
import { createContext, useContext, useState } from 'react';

const UserNavigationContext = createContext();

export function UserNavigationProvider({ children }) {
  const [activePage, setActivePage] = useState('Dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false); // ← NEW

  return (
    <UserNavigationContext.Provider value={{ activePage, setActivePage, sidebarOpen, setSidebarOpen }}>
      {children}
    </UserNavigationContext.Provider>
  );
}

export function useUserNavigation() {
  return useContext(UserNavigationContext);
}