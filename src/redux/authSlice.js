
import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, refreshUser } from './authOperations';



const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// == handleFunctiln ==



const handleFulfiledReg = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

const handleFulfiledLog = (state, action) => {
  state.user = action.payload.user;
  state.token = action.payload.token;
  state.isLoggedIn = true;
}

const handleFulfiledOut = (state) => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
}

const handlePendRefresh = (state) => {
  state.isRefreshing = true;
}

const handleFulfRefresh = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
}

const handleRejRefresh = (state) => {
  state.isRefreshing = false;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, handleFulfiledReg)
      .addCase(logIn.fulfilled, handleFulfiledLog)
      .addCase(logOut.fulfilled, handleFulfiledOut)

      .addCase(refreshUser.pending, handlePendRefresh)
      .addCase(refreshUser.fulfilled, handleFulfRefresh)
      .addCase(refreshUser.rejected, handleRejRefresh)
  }
});

export const authReducer  = authSlice.reducer;