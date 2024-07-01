import {
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import type { TodosSchema as TodosResponse } from '../lib/schema';
import { zTodosObject } from '../lib/schema';

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: 'todosApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/todos',
  }),
  // tags allows RTK Query to auto refetch/refresh the UI from server
  tagTypes: ['Todo'],
  endpoints: (builder) => ({
    getTodos: builder.query<
      TodosResponse,
      { limit: number; skip: number }
    >({
      query: ({ limit, skip }) => `/?limit=${limit}&skip=${skip}`,
      transformResponse: (response: TodosResponse) => {
        zTodosObject.parse(response);
        return response;
      },
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
