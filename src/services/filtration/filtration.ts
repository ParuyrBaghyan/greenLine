import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const filtrationApi = createApi({
  reducerPath: "filtrationApi",
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
  tagTypes: ["filtrationApi"],

  endpoints: (builder) => ({
    getAllProductsFilter: builder.query({
      query: (body) => ({
        url: `/Category/GetAllProductsFilter`,
        method: "POST",
        body: body,
      }),
      providesTags: ["filtrationApi"],
    }),
  }),
});

export const { useGetAllProductsFilterQuery } = filtrationApi;
