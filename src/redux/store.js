import { configureStore } from '@reduxjs/toolkit';
import publicReducer from './slices/publicSlice';
import adminReducer from './slices/adminSlice';
import authReducer from './slices/authSlice';

export const store = configureStore({
  reducer: {
    public: publicReducer,
    admin: adminReducer,
    auth: authReducer,
  },
});
