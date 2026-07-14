'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMe } from '@/redux/slices/authSlice';

export default function ProtectedRoute({ children, allowedRoles }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, status, accessToken, user } = useSelector((state) => state.auth);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      // If we don't know the user's status yet, but we have a token, try to fetch the user
      if (accessToken && !isAuthenticated && status !== 'loading') {
        const result = await dispatch(fetchMe());
        if (fetchMe.rejected.match(result)) {
          router.push('/login');
        }
      } else if (!accessToken) {
        // No token means not logged in
        router.push('/login');
      } else if (isAuthenticated && user && allowedRoles) {
        // Check if user has required role
        if (!allowedRoles.includes(user.role)) {
          // Redirect based on their actual role
          if (user.role === 'admin' || user.role === 'super_admin') {
            router.push('/dashboard');
          } else {
            router.push('/user/dashboard');
          }
        }
      }
      setIsInitializing(false);
    };

    checkAuth();
  }, [accessToken, isAuthenticated, status, user, allowedRoles, dispatch, router]);

  // Show a loading state while we verify token
  if (isInitializing || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If we finished initializing and are authenticated, render children
  if (isAuthenticated && user) {
    if (allowedRoles && !allowedRoles.includes(user.role)) {
      return null; // Will be redirected by useEffect
    }
    return children;
  }

  // Fallback (router should have redirected by now)
  return null;
}
