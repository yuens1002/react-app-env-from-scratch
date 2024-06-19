import React from 'react';
import { NewTodoForm } from './NewTodoForm';
import { TodoListItem } from './TodoListItem';
import { useSelector, useDispatch } from 'react-redux';
import { useGetTodosQuery } from '../service/apiSlice';
import { removeTodo, toggleTodoCompleted } from './todosSlice';
import './TodoList.css';

export function TodoList() {
  const dispatch = useDispatch();

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
        <NewTodoForm />
        {todos.todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            onRemovedPressed={() => dispatch(removeTodo(todo.todo))}
            onToggleCompleted={() =>
              dispatch(toggleTodoCompleted(todo.todo))
            }
          />
        ))}
      </>
    );
  } else if (isError) {
    content = <div>{error.toString()}</div>;
  }

  return <div className="list-wrapper">{content}</div>;
}
