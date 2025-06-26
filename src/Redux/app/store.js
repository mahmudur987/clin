// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/slice/apiSlice";
import uiReducer from "../features/slice/uiSlice";
export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
