export function sortTodos(todos, sortOrder) {
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
}

export function filterTodos(todos, selected) {
  if (selected === 'all') return todos;
  if (selected === 'completed') {
    return todos.filter((todo) => todo.completed === true);
  } else return todos.filter((todo) => todo.completed === false);
}
