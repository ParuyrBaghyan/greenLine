import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const productDetailsApi = createApi({
  reducerPath: "productDetailsApi",
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
  tagTypes: ["productDetailsApi"],

  endpoints: (builder) => ({
    getProductDetails: builder.query({
      query: ({productId}) => `/product/Get/${productId}`,
      providesTags: ["productDetailsApi"],
      keepUnusedDataFor: 300,
    }),

    getRelatedProducts: builder.query({
      query: ({productId}) => `/product/GetRelated/${productId}`,
      providesTags: ["productDetailsApi"],
      keepUnusedDataFor: 300,
    }),
  }),
});

export const { useGetProductDetailsQuery,  useGetRelatedProductsQuery } = productDetailsApi;
