import React from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoListItem } from './TodoListItem';
import { useGetTodosQuery } from '../service/apiSlice';
import './TodoList.css';

export function TodoList() {
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery();
  let content;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <>
        <NewTodoForm todos={todos} />
        {todos.todos.map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="list-wrapper">{content}</div>;
}
