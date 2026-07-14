import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// ─── Async Thunks ─────────────────────────────────────────────────────────────

export const fetchStores = createAsyncThunk(
  'stores/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const res = await api.get('/stores');
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to fetch stores');
    }
  }
);

export const connectStore = createAsyncThunk(
  'stores/connect',
  async (storeData, { rejectWithValue }) => {
    try {
      const res = await api.post('/stores', storeData);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to connect store');
    }
  }
);

export const updateStore = createAsyncThunk(
  'stores/update',
  async ({ id, data }, { rejectWithValue }) => {
    try {
      const res = await api.patch(`/stores/${id}`, data);
      return res.data.data;
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to update store');
    }
  }
);

export const disconnectStore = createAsyncThunk(
  'stores/disconnect',
  async (id, { rejectWithValue }) => {
    try {
      await api.delete(`/stores/${id}`);
      return id; // return ID to remove from state
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Failed to disconnect store');
    }
  }
);

export const syncStore = createAsyncThunk(
  'stores/sync',
  async (id, { rejectWithValue }) => {
    try {
      const res = await api.post(`/stores/${id}/sync`);
      return { id, message: res.data.message };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || 'Sync failed');
    }
  }
);

// ─── Slice ────────────────────────────────────────────────────────────────────

const storeSlice = createSlice({
  name: 'stores',
  initialState: {
    items: [],        // List of connected stores
    loading: false,
    syncing: null,    // ID of store currently syncing
    error: null,
    successMessage: null,
  },
  reducers: {
    clearStoreMessages: (state) => {
      state.error = null;
      state.successMessage = null;
    },
  },
  extraReducers: (builder) => {
    // fetchStores
    builder
      .addCase(fetchStores.pending, (state) => { state.loading = true; })
      .addCase(fetchStores.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchStores.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // connectStore
    builder
      .addCase(connectStore.pending, (state) => { state.loading = true; })
      .addCase(connectStore.fulfilled, (state, action) => {
        state.loading = false;
        state.items.unshift(action.payload);
        state.successMessage = 'Store connected successfully!';
      })
      .addCase(connectStore.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // updateStore
    builder
      .addCase(updateStore.fulfilled, (state, action) => {
        const idx = state.items.findIndex((s) => s._id === action.payload._id);
        if (idx !== -1) state.items[idx] = action.payload;
        state.successMessage = 'Store updated successfully!';
      })
      .addCase(updateStore.rejected, (state, action) => {
        state.error = action.payload;
      });

    // disconnectStore
    builder
      .addCase(disconnectStore.fulfilled, (state, action) => {
        state.items = state.items.filter((s) => s._id !== action.payload);
        state.successMessage = 'Store disconnected.';
      })
      .addCase(disconnectStore.rejected, (state, action) => {
        state.error = action.payload;
      });

    // syncStore
    builder
      .addCase(syncStore.pending, (state, action) => {
        state.syncing = action.meta.arg;
      })
      .addCase(syncStore.fulfilled, (state, action) => {
        state.syncing = null;
        state.successMessage = action.payload.message;
      })
      .addCase(syncStore.rejected, (state, action) => {
        state.syncing = null;
        state.error = action.payload;
      });
  },
});

export const { clearStoreMessages } = storeSlice.actions;
export default storeSlice.reducer;
