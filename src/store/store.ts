"use client";
import { configureStore } from "@reduxjs/toolkit";
import { searchApi } from "@/services/search/search";
import { setupListeners } from "@reduxjs/toolkit/query";
import { categoriesApi } from "@/services/categories/categories";
import { tokenApi } from "@/services/token";
import categoriesReducer from "./categories/categoriesSlice";
import searchReducer from "./search/search";
import productsRouter from "./products/products";
import filterRouter from "./filtration/filtration";
import { bannersApi } from "@/services/banners/banners";
import { brandsApi } from "@/services/brands/brands";
import { productsApi } from "@/services/products/products";
import { filtrationApi } from "@/services/filtration/filtration";
import { productDetailsApi } from "@/services/product/product-details";

export const store = configureStore({
  reducer: {
    [searchApi.reducerPath]: searchApi.reducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    [tokenApi.reducerPath]: tokenApi.reducer,
    [brandsApi.reducerPath]: brandsApi.reducer,
    [bannersApi.reducerPath]: bannersApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [filtrationApi.reducerPath]: filtrationApi.reducer,
    [productDetailsApi.reducerPath]: productDetailsApi.reducer,
    categories: categoriesReducer,
    search: searchReducer,
    products: productsRouter,
    filter: filterRouter,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      searchApi.middleware,
      categoriesApi.middleware,
      tokenApi.middleware,
      bannersApi.middleware,
      brandsApi.middleware,
      productsApi.middleware,
      filtrationApi.middleware,
      productDetailsApi.middleware
    ),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);
