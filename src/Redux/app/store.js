// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    // other reducers...
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
