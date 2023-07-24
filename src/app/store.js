import { configureStore } from "@reduxjs/toolkit";
import { apiSlice as api } from "./services/api";
import rootReducer from "./reducers";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch
