import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";
import { BASE_URL_API } from "@/helperFunctions/constants";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL_API,
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
  tagTypes: ["categoriesApi"],

  endpoints: (builder) => ({
    getParentCategories: builder.query({
      query: () => ({
        url: `/Category/GetParentCategories`,
        method: "POST",
        body: {},
      }),
      providesTags: ["categoriesApi"],
    }),

    getAllChildren: builder.query({
      query: (parentId) => {
        return {
          url: `/Category/GetAllChildren`,
          method: "POST",
          body: parentId,
        };
      },
      providesTags: ["categoriesApi"],
    }),

    getCategoryNames: builder.query({
      query: (parentId) => {
        return {
          url: `/Category/GetCategory`,
          method: "POST",
          body: parentId,
        };
      },
      providesTags: ["categoriesApi"],
    }),

    getByCategory: builder.query({
      query: (body) => {
        return {
          url: `/Product/GetByLastCategory`,
          method: "POST",
          body: body,
        };
      },
      providesTags: ["categoriesApi"],
      keepUnusedDataFor : 300,
    }),
  }),
});

export const {
  useGetParentCategoriesQuery,
  useGetAllChildrenQuery,
  useGetCategoryNamesQuery,
  useLazyGetByCategoryQuery
} = categoriesApi;
