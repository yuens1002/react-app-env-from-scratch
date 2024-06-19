import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/todos',
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetTodosQuery } = apiSlice;
