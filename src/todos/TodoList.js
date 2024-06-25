import React from 'react';
import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoPagination } from './TodoPagination';
import { TodoListItem } from './TodoListItem';
import { useGetTodosQuery } from '../service/apiSlice';
import './TodoList.css';

export function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageLimit = 5;
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery({
    limit: pageLimit,
    skip: (currentPage - 1) * pageLimit,
  });

  let content;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <>
        <NewTodoForm todos={todos} />
        <TodoPagination
          pageInfo={{
            currentPage,
            totalPages: Math.ceil(todos.total / pageLimit),
            setCurrentPage,
          }}
        />
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
