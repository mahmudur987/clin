import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://your-api-url.com/" }), // update later
  endpoints: () => ({}),
});

export default apiSlice.endpoints;
