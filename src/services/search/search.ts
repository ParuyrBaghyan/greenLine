import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const searchApi = createApi({
  reducerPath: "searchApi",
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
  tagTypes: ["searchApi"],

  endpoints: (builder) => ({
    getSearchResult: builder.query({
      query: (term) => ({
        url: `/Product/Search`,
        method: "POST",
        body: {
          count: 20,
          search: term,
        },
      }),
      providesTags: ["searchApi"],
    }),
    getFreqSearched: builder.query({
      query: () => `/Page/Get?type=2`,
      providesTags: ["searchApi"],
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useLazyGetSearchResultQuery, useGetFreqSearchedQuery } =
  searchApi;
