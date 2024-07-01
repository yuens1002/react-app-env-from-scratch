import { useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoPagination from './TodoPagination';
import TodoListItem from './TodoListItem';
import TodoFilter from './TodoFilter';
import SortTodoDropdown from './SortTodoDropdown';
import { apiSlice } from '../service/apiSlice';

import { sortTodos, filterTodos } from '../utilities/computeTodos';
import type { Completed } from '../lib/types';

import './TodoList.css';

export default function TodoList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedFilter, setSelectedFilter] =
    useState<Completed>('all');
  const [sortOrder, setSortOrder] = useState('a-z');
  const pageLimit = 7;
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = apiSlice.useGetTodosQuery({
    limit: pageLimit,
    skip: (currentPage - 1) * pageLimit,
  });

  let content;

  if (isLoading) {
    content = <div>loading...</div>;
  } else if (isSuccess) {
    content = (
      <>
        <NewTodoForm todos={todos.todos} />
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
