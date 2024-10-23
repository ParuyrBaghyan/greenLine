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
          body:  parentId ,
        };
      },
      providesTags: ["categoriesApi"],
    }),
  }),
});

export const { useGetParentCategoriesQuery, useGetAllChildrenQuery } =
  categoriesApi;
