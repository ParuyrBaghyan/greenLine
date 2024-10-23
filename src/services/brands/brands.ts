import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const brandsApi = createApi({
  reducerPath: "brandsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://web-backend.innodream.com/api/",
    prepareHeaders: (headers) => {
      Headers(
        headers,
        "application/json",
        "https://greenline.yerevan-city.am",
        "3"
      );
      return headers;
    },
  }),
  tagTypes: ["brandsApi"],

  endpoints: (builder) => ({
    getTrendingBrands: builder.query({
      query: () => `/Brand/GetTrendingBrand`,
      providesTags: ["brandsApi"],
    }),
  }),
});

export const { useGetTrendingBrandsQuery } = brandsApi;
