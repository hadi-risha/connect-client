import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../utils/user/axiosInstance'; 

import { ILoginData } from '../types/User';

interface LoginState {
  user: ILoginData | null;
  loading: boolean;
  error: string | null;
  token: string | null;
  isBlocked: string | boolean | null;
  isRoleChanged: string | boolean | null;
  otpLoading: boolean; // loading state for OTP
  otpError: string | null; // error state for OTP
}

const initialState: LoginState = {
  user: null,
  loading: false,
  error: null,
  token: localStorage.getItem('token') || null, 
  isBlocked: null,
  isRoleChanged: null,

  otpLoading: false,
  otpError: null,
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (loginData: { email: string; password: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/login', loginData); 
      const { token } = response.data;
      const { isBlocked, isRoleChanged } = response.data.userData; // Extract from nested userData

      if (isBlocked) {
        console.error("Account is blocked, stopping login process.", isBlocked);
        return rejectWithValue({
          message: "Your account has been blocked.",
          isBlocked: true,
        });
      }

      localStorage.setItem('token', token);
      localStorage.setItem('isBlocked', 'false');
      localStorage.setItem('isRoleChanged', isRoleChanged);
      return response.data;
    } catch (error: any) {
      console.log("error in loginUser slice :- ",error);      
      const { message, needsVerification, isBlocked, isRoleChanged } = error.data;

      return rejectWithValue({
        message: error.data.message || "An error occurred",
        needsVerification: error.data.needsVerification || false,
        isBlocked,
      });
    }
  }
);

//verify now in login
// async thunk for sending OTP
export const sendOtp = createAsyncThunk(
  'user/sendOtp',
  async (data: { email: string }, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/verify-login', data); 
      return response.data; 
    } catch (error: any) {
      console.log("error in login verify Slice :- ", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.token = null;
      localStorage.clear(); // Clear all local storage items
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;  
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userRole', action.payload.role);

        // localStorage.setItem('isBlocked', action.payload.isBlocked);  
        localStorage.setItem('isBlocked', "loginSlice")
        localStorage.setItem('isRoleChanged', action.payload.isRoleChanged); 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })

      //verify-now otp cases
      .addCase(sendOtp.pending, (state) => {
        state.otpLoading = true;
        state.otpError = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        state.otpLoading = false;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.otpLoading = false;
        state.otpError = action.payload as string;
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
