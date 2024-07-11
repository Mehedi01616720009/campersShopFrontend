import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.SERVER_URL as string,
});

export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: baseQuery,
    endpoints: () => ({}),
});
