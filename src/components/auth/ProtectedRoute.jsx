'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';

export default function ProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const { isAuthenticated, status, accessToken, user, isRestoring } = useSelector((state) => state.auth);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    // If Redux is currently restoring the session on mount, wait for it to finish.
    if (isRestoring) return;

    const checkAuth = async () => {
      if (!accessToken) {
        // No token means not logged in
        router.push('/login');
      } else if (isAuthenticated && user && allowedRoles) {
        // Check if user has required role (case insensitive to be safe)
        const userRole = (user?.role || '').toLowerCase();
        const allowedRolesLower = allowedRoles.map(r => r.toLowerCase());
        
        if (!allowedRolesLower.includes(userRole)) {
          // Redirect based on their actual role
          if (userRole === 'admin' || userRole === 'super_admin') {
            router.push('/dashboard');
          } else {
            router.push('/user/dashboard');
          }
        }
      }
      setIsInitializing(false);
    };

    checkAuth();
  }, [accessToken, isAuthenticated, status, user, allowedRoles, isRestoring, router]);

  // Show a loading state while we verify token or restore session
  if (isRestoring || isInitializing || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If we finished initializing and are authenticated, render children
  if (isAuthenticated && user) {
    const userRole = (user?.role || '').toLowerCase();
    const allowedRolesLower = allowedRoles?.map(r => r.toLowerCase()) || [];
    
    if (allowedRolesLower.length > 0 && !allowedRolesLower.includes(userRole)) {
      return null; // Will be redirected by useEffect
    }
    return children;
  }

  // Fallback (router should have redirected by now)
  return null;
}
