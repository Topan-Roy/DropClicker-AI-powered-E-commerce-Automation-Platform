import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '@/services/api';

// ── Thunks ───────────────────────────────────────────────────────────────────

export const fetchCategories = createAsyncThunk(
    'categories/fetchAll',
    async (_, { rejectWithValue }) => {
        try {
            const res = await api.get('/categories');
            return res.data?.data || [];
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Failed to fetch categories');
        }
    }
);

export const createCategory = createAsyncThunk(
    'categories/create',
    async (payload, { rejectWithValue }) => {
        try {
            const res = await api.post('/categories', payload);
            return res.data?.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Failed to create category');
        }
    }
);

export const updateCategory = createAsyncThunk(
    'categories/update',
    async ({ id, data }, { rejectWithValue }) => {
        try {
            const res = await api.patch(`/categories/${id}`, data);
            return res.data?.data;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Failed to update category');
        }
    }
);

export const deleteCategory = createAsyncThunk(
    'categories/delete',
    async (id, { rejectWithValue }) => {
        try {
            await api.delete(`/categories/${id}`);
            return id;
        } catch (err) {
            return rejectWithValue(err.response?.data?.message || 'Failed to delete category');
        }
    }
);

// ── Slice ────────────────────────────────────────────────────────────────────

const categorySlice = createSlice({
    name: 'categories',
    initialState: {
        items: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        // fetchAll
        builder
            .addCase(fetchCategories.pending, (state) => { state.loading = true; state.error = null; })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });

        // create
        builder.addCase(createCategory.fulfilled, (state, action) => {
            if (action.payload) state.items.unshift(action.payload);
        });

        // update
        builder.addCase(updateCategory.fulfilled, (state, action) => {
            if (!action.payload) return;
            const idx = state.items.findIndex(c => c._id === action.payload._id);
            if (idx !== -1) state.items[idx] = action.payload;
        });

        // delete
        builder.addCase(deleteCategory.fulfilled, (state, action) => {
            state.items = state.items.filter(c => c._id !== action.payload);
        });
    },
});

export default categorySlice.reducer;
