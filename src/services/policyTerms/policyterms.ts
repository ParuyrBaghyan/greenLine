import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Headers from "../headers";

export const policyTermsApi = createApi({
    reducerPath: "policytermsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://web-backend.innodream.com/api/",
        prepareHeaders: (headers) => {
            Headers({
                headers,
                accept: "application/json",
                origin: "https://greenline.yerevan-city.am",
                ostype: "3"
            });
            return headers;
        },
    }),
    tagTypes: ["policyTermsApi"],

    endpoints: (builder) => ({
        getPolicyTerms: builder.query({
            query: ({ identifier }) => `/PolicyTerms/Get/${identifier}`,
            providesTags: ["policyTermsApi"],
            keepUnusedDataFor: 300,
        }),
    }),
});

export const { useGetPolicyTermsQuery } = policyTermsApi;
