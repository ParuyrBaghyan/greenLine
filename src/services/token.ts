



  import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
    import Headers from './headers'

export const tokenApi = createApi({
  reducerPath: "tokenApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://web-backend.innodream.com/api/",
    prepareHeaders: (headers) => {
      Headers(headers, "application/json", "https://greenline.yerevan-city.am", "3");
      return headers;
    },
  }),
  tagTypes: ["tokenApi"],

  endpoints: (builder) => ({
    getToken: builder.mutation({
        query: (body) => {
          return {
            url: `/Account/RegisterGuest`,
            method: "POST",
            body,
          };
        },
        invalidatesTags: ["tokenApi"],
      }),
  }),
});

export const { useGetTokenMutation } = tokenApi;
