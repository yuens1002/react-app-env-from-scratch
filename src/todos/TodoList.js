import React from 'react';
import { useState } from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoPagination } from './TodoPagination';
import { TodoListItem } from './TodoListItem';
import { TodoFilter } from './TodoFilter';
import { SortTodoDropdown } from './SortTodoDropdown';
import { useGetTodosQuery } from '../service/apiSlice';
import './TodoList.css';
import { sortTodos, filterTodos } from '../utilities/computeTodos';

export function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('a-z');
  const pageLimit = 7;
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
        <div className="controls-container">
          <TodoFilter
            filter={{ selectedFilter, setSelectedFilter }}
          />
          <SortTodoDropdown sorter={{ sortOrder, setSortOrder }} />
          <TodoPagination
            pageInfo={{
              currentPage,
              setCurrentPage,
              totalPages: Math.ceil(todos.total / pageLimit),
            }}
          />
        </div>
        {filterTodos(
          sortTodos(todos.todos, sortOrder),
          selectedFilter
        ).map((todo) => (
          <TodoListItem key={todo.id} todo={todo} />
        ))}
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="list-wrapper">{content}</div>;
}
