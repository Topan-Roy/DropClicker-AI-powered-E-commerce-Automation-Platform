'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMe } from '@/redux/slices/authSlice';

export default function ProtectedRoute({ children }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const { isAuthenticated, status, accessToken } = useSelector((state) => state.auth);
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
      }
      setIsInitializing(false);
    };

    checkAuth();
  }, [accessToken, isAuthenticated, status, dispatch, router]);

  // Show a loading state while we verify token
  if (isInitializing || status === 'loading') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // If we finished initializing and are authenticated, render children
  if (isAuthenticated) {
    return children;
  }

  // Fallback (router should have redirected by now)
  return null;
}
