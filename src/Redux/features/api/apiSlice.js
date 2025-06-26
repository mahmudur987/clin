import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://alibackend.duckdns.org" }),
  endpoints: () => ({}),
});

export default apiSlice.endpoints;
