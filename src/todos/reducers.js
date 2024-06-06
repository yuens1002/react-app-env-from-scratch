import {
  CREATE_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETED,
} from './actions';

export const todos = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { text } = payload;
      const newTodo = {
        text,
        isCompleted: false,
      };
      return state.concat(newTodo);
    }
    case REMOVE_TODO: {
      const { text } = payload;
      return state.filter((todo) => todo.text != text);
    }
    case TOGGLE_COMPLETED: {
      const { text } = payload;
      return state.reduce((todos, todo) => {
        const newTodo = { ...todo };
        if (newTodo.text === text) {
          newTodo.isCompleted = !newTodo.isCompleted;
        }

        return todos.push(newTodo), todos;
      }, []);
    }
    default:
      return state;
  }
};
