import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/todos',
  }),
  // tags allows RTK Query to auto refetch/refresh the UI from server
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => '/',
      providesTags: ['Todo'],
    }),
    addNewTodo: builder.mutation({
      query: (newTodo) => ({
        url: '/add',
        headers: { 'Content-Type': 'application/json' },
        method: 'POST',
        // Include the entire post object as the body of the request
        body: newTodo,
      }),
      invalidatesTags: ['Todo'],
    }),
    updateTodoStatus: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/${id}`,
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        // Include the entire post object as the body of the request
        body: patch,
      }),
      invalidatesTags: ['Todo'],
    }),
    deleteTodo: builder.mutation({
      query: ({ id }) => ({
        url: `/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

// Export the auto-generated hook for the `getPosts` query endpoint
export const {
  useGetTodosQuery,
  useAddNewTodoMutation,
  useUpdateTodoStatusMutation,
  useDeleteTodoMutation,
} = apiSlice;
