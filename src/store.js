import { configureStore } from '@reduxjs/toolkit';
// import todosReducer from './todos/todosSlice';
import { apiSlice } from './service/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
