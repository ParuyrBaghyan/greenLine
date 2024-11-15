import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const productsApi = createApi({
  reducerPath: "productsApi",
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
  tagTypes: ["productsApi"],

  endpoints: (builder) => ({
    getSpecialItems: builder.query({
      query: () => `/Page/Get?type=1`,
      providesTags: ["productsApi"],
      keepUnusedDataFor: 300, 
    }),
  }),
});

export const { useGetSpecialItemsQuery } = productsApi;
