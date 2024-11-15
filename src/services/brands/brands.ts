import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const brandsApi = createApi({
  reducerPath: "brandsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://web-backend.innodream.com/api/",
    prepareHeaders: (headers) => {
     Headers({
        headers,
       accept: "application/json",
       origin: "https://greenline.yerevan-city.am",
       ostype: "3"
     } );
      return headers;
    },
  }),
  tagTypes: ["brandsApi"],

  endpoints: (builder) => ({
    getTrendingBrands: builder.query({
      query: () => `/Brand/GetTrendingBrand`,
      providesTags: ["brandsApi"],
      keepUnusedDataFor: 300, 
    }),

    getByBrand: builder.query({
      query: (body) => ({
        url: `/Product/GetByBrand`,
        method: "POST",
        body: body,
      }),
      providesTags: ["brandsApi"],
    }),
  }),
});

export const { useGetTrendingBrandsQuery, useLazyGetByBrandQuery } = brandsApi;
