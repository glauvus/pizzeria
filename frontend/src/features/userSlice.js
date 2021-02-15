import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    cartCounter: 0,
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    increaseCartCounter: (state) => {
      state.cartCounter = state.cartCounter + 1;
    },
    setCartCounter: (state, action) => {
      state.cartCounter = action.payload;
    }
  },
});

export const { login, logout, increaseCartCounter, setCartCounter } = userSlice.actions;

export const isLoggedIn = state => state.user.isLoggedIn;
export const cartCounter = state => state.user.cartCounter;

export default userSlice.reducer;
