import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { todos } from './todos/reducers';

const reducers = {
  todos,
};

const rootReducer = combineReducers(reducers);

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});
