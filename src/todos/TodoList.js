import React from 'react';
import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoPagination } from './TodoPagination';
import { TodoListItem } from './TodoListItem';
import { TodoFilter } from './TodoFilter';
import { useGetTodosQuery } from '../service/apiSlice';
import './TodoList.css';

export function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');
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

  function filterTodos(todos, selected) {
    if (selected === 'all') return todos;
    if (selected === 'completed') {
      return todos.filter((todo) => todo.completed === true);
    } else return todos.filter((todo) => todo.completed === false);
  }

  let content;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <>
        <NewTodoForm todos={todos} />
        <div className="controls-container">
          <TodoFilter
            filter={{ selectedFilter, setSelectedFilter }}
          />
          <TodoPagination
            pageInfo={{
              currentPage,
              setCurrentPage,
              totalPages: Math.ceil(todos.total / pageLimit),
            }}
          />
        </div>
        {filterTodos(todos.todos, selectedFilter).map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="list-wrapper">{content}</div>;
}
