import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../services/api';

// Thunks
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', credentials);
      const { user, accessToken } = response.data.data;
      if (typeof window !== 'undefined') {
        localStorage.setItem('accessToken', accessToken);
        // Also save user data so UI doesn't flash on reload
        localStorage.setItem('user', JSON.stringify(user));
      }
      return { user, accessToken };
    } catch (error) {
      let errorMsg = error.response?.data?.message || error.message || 'Login failed';
      if (error.response?.data?.errors?.length > 0) {
        errorMsg = error.response.data.errors.map(err => err.message).join(', ');
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data.message; // Success message
    } catch (error) {
      let errorMsg = error.response?.data?.message || error.message || 'Registration failed';
      if (error.response?.data?.errors?.length > 0) {
        errorMsg = error.response.data.errors.map(err => err.message).join(', ');
      }
      return rejectWithValue(errorMsg);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await api.post('/auth/logout');
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login'; // Force redirect to login
      }
      return null;
    } catch (error) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
        window.location.href = '/login'; // Force redirect to login
      }
      return rejectWithValue(error.response?.data?.message || 'Logout failed');
    }
  }
);

export const fetchMe = createAsyncThunk(
  'auth/fetchMe',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/auth/me');
      // The API returns data inside a 'user' property: { success: true, data: { user: {...} } }
      const user = response.data.data.user;
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch user');
    }
  }
);

// Restores session on app load ONLY if user has a token in localStorage
export const restoreSession = createAsyncThunk(
  'auth/restoreSession',
  async (_, { dispatch, rejectWithValue }) => {
    try {
      let accessToken = null;
      let cachedUser = null;
      if (typeof window !== 'undefined') {
        accessToken = localStorage.getItem('accessToken');
        const userStr = localStorage.getItem('user');
        if (userStr) cachedUser = JSON.parse(userStr);
      }

      // If no token exists, user is simply not logged in. DO NOT create one.
      if (!accessToken) {
        return rejectWithValue('No active session');
      }
      
      // Immediately dispatch success if we have cached data to prevent UI flash
      if (cachedUser) {
        // We still let the network request run to get fresh data, but we don't wait for it to show the UI
      }
      
      // Fetch fresh user profile
      const meResponse = await api.get('/auth/me');
      // Extract user from the nested data object
      const user = meResponse.data.data.user;
      
      if (typeof window !== 'undefined') {
        localStorage.setItem('user', JSON.stringify(user));
      }

      return { user, accessToken };
    } catch (error) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      }
      return rejectWithValue('Session expired');
    }
  }
);

const getInitialUser = () => {
  if (typeof window !== 'undefined') {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  }
  return null;
};

const initialState = {
  user: getInitialUser(),
  accessToken: typeof window !== 'undefined' ? localStorage.getItem('accessToken') : null,
  isAuthenticated: typeof window !== 'undefined' ? !!localStorage.getItem('accessToken') : false,
  isRestoring: true,
  status: 'idle',
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    }
  },
  extraReducers: (builder) => {
    // Restore Session
    builder.addCase(restoreSession.pending, (state) => {
      state.isRestoring = true;
    });
    builder.addCase(restoreSession.fulfilled, (state, action) => {
      state.isRestoring = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(restoreSession.rejected, (state) => {
      state.isRestoring = false;
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    });

    // Login
    builder.addCase(loginUser.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
      state.isAuthenticated = false;
    });

    // Register
    builder.addCase(registerUser.pending, (state) => {
      state.status = 'loading';
      state.error = null;
    });
    builder.addCase(registerUser.fulfilled, (state) => {
      state.status = 'succeeded';
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.payload;
    });

    // Logout
    builder.addCase(logoutUser.fulfilled, (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.status = 'idle';
    });
    builder.addCase(logoutUser.rejected, (state) => {
      state.user = null;
      state.accessToken = null;
      state.isAuthenticated = false;
      state.status = 'idle';
    });

    // Fetch Me
    builder.addCase(fetchMe.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchMe.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(fetchMe.rejected, (state) => {
      state.status = 'failed';
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('user');
      }
    });
  },
});

export const { clearError, setAuthenticated } = authSlice.actions;
export default authSlice.reducer;
