import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import { apiSlice as api } from "./services/api";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  auth: authReducer,
});

export default rootReducer;
