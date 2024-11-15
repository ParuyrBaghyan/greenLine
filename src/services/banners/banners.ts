import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const bannersApi = createApi({
  reducerPath: "bannersApi",
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
  tagTypes: ["bannersApi"],

  endpoints: (builder) => ({
    getBanners: builder.query({
      query: (type) => ({
        url: `/Banner/GetByType`,
        method: "POST",
        body: type,
      }),
      providesTags: ["bannersApi"],
    }),
    getActiveCollections: builder.query({
      query: (body) => ({
        url: `/Promo/GetActiveCollections`,
        method: "POST",
        body: body,
      }),
      providesTags: ["bannersApi"],
    }),
  }),
});

export const { useGetBannersQuery, useGetActiveCollectionsQuery } = bannersApi;
