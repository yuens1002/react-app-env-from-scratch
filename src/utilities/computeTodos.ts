import type { Todo } from '../lib/types';

export function sortTodos(todos: Todo[], sortOrder: string) {
  if (sortOrder === 'a-z') {
    return todos.toSorted((a, b) =>
      ('' + a.todo).localeCompare(b.todo)
    );
  }
  if (sortOrder === 'z-a') {
    return todos.toSorted((a, b) =>
      ('' + b.todo).localeCompare(a.todo)
    );
  }
  return todos;
}

export function filterTodos(todos: Todo[], selected: string) {
  if (selected === 'all') return todos;
  if (selected === 'completed') {
    return todos.filter((todo) => todo.completed === true);
  } else return todos.filter((todo) => todo.completed === false);
}
