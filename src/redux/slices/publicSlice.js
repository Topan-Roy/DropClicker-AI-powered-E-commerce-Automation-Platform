import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api/v1';

export const fetchTrendingProducts = createAsyncThunk(
  'public/fetchTrendingProducts',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/public/trending-products`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch products');
    }
  }
);

export const fetchExploreCategories = createAsyncThunk(
  'public/fetchExploreCategories',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}/public/explore-categories`);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to fetch categories');
    }
  }
);

const publicSlice = createSlice({
  name: 'public',
  initialState: {
    trendingProducts: [],
    exploreCategories: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrendingProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTrendingProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.trendingProducts = action.payload;
      })
      .addCase(fetchTrendingProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      .addCase(fetchExploreCategories.fulfilled, (state, action) => {
        state.exploreCategories = action.payload;
      });
  },
});

export default publicSlice.reducer;
