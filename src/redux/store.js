import { configureStore } from '@reduxjs/toolkit';
import publicReducer from './slices/publicSlice';
import adminReducer from './slices/adminSlice';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';
import categoryReducer from './slices/categorySlice';
import productReducer from './slices/productSlice';

export const store = configureStore({
  reducer: {
    public: publicReducer,
    admin: adminReducer,
    auth: authReducer,
    user: userReducer,
    categories: categoryReducer,
    products: productReducer,
  },
});
