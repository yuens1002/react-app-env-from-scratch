import React from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createTodo } from './todosSlice';
import './NewTodoForm.css';

export function NewTodoForm() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="new-todo-button"
        onClick={() => {
          const isDuplicateText = todos.some(
            ({ todo }) => todo === inputValue
          );
          if (isDuplicateText) {
            setInputValue('todo already exists');
          } else {
            dispatch(createTodo(inputValue));
            setInputValue('');
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
