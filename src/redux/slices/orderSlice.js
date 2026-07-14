import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// ─── Async Thunks ─────────────────────────────────────────────────────────────

export const fetchOrders = createAsyncThunk(
  'orders/fetchAll',
  async (params, { rejectWithValue }) => {
    try {
      const res = await api.get('/orders', { params });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch orders');
    }
  }
);

export const fetchOrderById = createAsyncThunk(
  'orders/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.get(`/orders/${id}`);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch order');
    }
  }
);

export const fetchOrderStats = createAsyncThunk(
  'orders/fetchStats',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/orders/stats');
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch order stats');
    }
  }
);

export const updateOrderStatus = createAsyncThunk(
  'orders/updateStatus',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.patch(`/orders/${id}/status`, data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update order status');
    }
  }
);

export const fulfillOrder = createAsyncThunk(
  'orders/fulfill',
  async ({ id, trackingData }, { rejectWithValue }) => {
    try {
      const res = await api.post(`/orders/${id}/fulfill`, trackingData);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fulfill order');
    }
  }
);

export const syncOrders = createAsyncThunk(
  'orders/sync',
  async ({ storeId, orders }, { rejectWithValue }) => {
    try {
      const res = await api.post('/orders/sync', { storeId, orders });
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Sync failed');
    }
  }
);

// ─── Slice ────────────────────────────────────────────────────────────────────

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
    total: 0,
    page: 1,
    limit: 20,
    currentOrder: null,
    stats: {
      total: 0,
      pending: 0,
      processing: 0,
      fulfilled: 0,
      cancelled: 0,
    },
    loading: false,
    syncing: false,
    error: null,
    successMessage: null,
  },
  reducers: {
    clearOrderMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // fetchOrders
    builder
      .addCase(fetchOrders.pending, (state) => { state.loading = true; })
      .addCase(fetchOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
      })
      .addCase(fetchOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // fetchOrderById
    builder
      .addCase(fetchOrderById.pending, (state) => { state.loading = true; })
      .addCase(fetchOrderById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentOrder = action.payload;
      })
      .addCase(fetchOrderById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // fetchOrderStats
    builder
      .addCase(fetchOrderStats.fulfilled, (state, action) => {
        state.stats = action.payload;
      });

    // updateOrderStatus
    builder
      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const idx = state.items.findIndex((o) => o._id === action.payload._id);
        if (idx !== -1) state.items[idx] = action.payload;
        if (state.currentOrder?._id === action.payload._id) {
          state.currentOrder = action.payload;
        }
        state.successMessage = 'Order status updated!';
      })
      .addCase(updateOrderStatus.rejected, (state, action) => {
        state.error = action.payload;
      });

    // fulfillOrder
    builder
      .addCase(fulfillOrder.fulfilled, (state, action) => {
        const idx = state.items.findIndex((o) => o._id === action.payload._id);
        if (idx !== -1) state.items[idx] = action.payload;
        if (state.currentOrder?._id === action.payload._id) {
          state.currentOrder = action.payload;
        }
        state.successMessage = 'Order fulfilled with tracking info!';
      })
      .addCase(fulfillOrder.rejected, (state, action) => {
        state.error = action.payload;
      });

    // syncOrders
    builder
      .addCase(syncOrders.pending, (state) => { state.syncing = true; })
      .addCase(syncOrders.fulfilled, (state, action) => {
        state.syncing = false;
        state.successMessage = `Synced: ${action.payload.created} new orders, ${action.payload.skipped} skipped.`;
      })
      .addCase(syncOrders.rejected, (state, action) => {
        state.syncing = false;
        state.error = action.payload;
      });
  },
});

export const { clearOrderMessages } = orderSlice.actions;
export default orderSlice.reducer;
