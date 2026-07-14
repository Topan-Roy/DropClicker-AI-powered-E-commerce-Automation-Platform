'use client';

import { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import { restoreSession } from './slices/authSlice';

// A wrapper to use dispatch inside the Provider
function SessionRestorer({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Attempt to restore session silently on app load
    dispatch(restoreSession());
  }, [dispatch]);

  return <>{children}</>;
}

export function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <SessionRestorer>{children}</SessionRestorer>
    </Provider>
  );
}

