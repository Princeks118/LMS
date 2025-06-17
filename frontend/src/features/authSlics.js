import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducer: {
    userLoggedIn: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    usrLogedOut: (state, action) => {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});
export const { userLoggedIn, usrLogedOut } = authSlice.actions;
export default authSlice.reducer;
