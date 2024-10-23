"use client";
import { configureStore } from "@reduxjs/toolkit";
import { searchApi } from "@/services/search/search";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "@/services/categories/categories";
import { tokenApi } from "@/services/token";
import categoriesReducer from "./categories/categoriesSlice";
import { bannersApi } from "@/services/banners/banners";
import { brandsApi } from "@/services/brands/brands";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
    categories: categoriesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      searchApi.middleware,
      categoriesApi.middleware,
      tokenApi.middleware,
      bannersApi.middleware,
      brandsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
