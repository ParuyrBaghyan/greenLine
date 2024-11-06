import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const categoriesApi = createApi({
  reducerPath: "categoriesApi",
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
