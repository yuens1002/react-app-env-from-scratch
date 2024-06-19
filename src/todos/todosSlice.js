import { createSlice, isDraft } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    createTodo(state, action) {
      state.push({
        todo: action.payload,
        completed: false,
      });
    },
    removeTodo(state, action) {
      const text = action.payload;
      state.splice(
        state.findIndex((todo) => todo.todo === text),
        1
      );
    },
    toggleTodoCompleted(state, action) {
      const text = action.payload;
      const todo = state.find((todo) => todo.todo === text);
      todo.completed = !todo.completed;
    },
  },
});

export const { createTodo, removeTodo, toggleTodoCompleted } =
  todosSlice.actions;
// action creators and action types are generated automatically
export default todosSlice.reducer;
