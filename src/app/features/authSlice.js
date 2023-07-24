import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {},
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGJkMjk0MWYwZTgzMzk3YjhiOWZkODIiLCJlbWFpbCI6Im9kZWpvYmlAZ21haWwuY29tIiwiaWF0IjoxNjkwMTMyOTI1LCJleHAiOjE2OTAxNDAxMjV9.TXl78KJPqK-nocRbAcrufN804DjJkbu-8qqQScddwH4",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logoutUser: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      state.token = "";
    },
  },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;
