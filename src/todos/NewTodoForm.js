import React from 'react';
import { useState } from 'react';
import './NewTodoForm.css';
import { useAddNewTodoMutation } from '../service/apiSlice';

export function NewTodoForm({ todos = [] }) {
  const [inputValue, setInputValue] = useState('');
  const [addNewTodo] = useAddNewTodoMutation();

  const onNewTodoClicked = async () => {
    const isDuplicateText = todos.todos.some(
      ({ todo }) => todo === inputValue
    );
    if (isDuplicateText) {
      setInputValue('todo already exists');
    } else {
      try {
        await addNewTodo({
          todo: inputValue,
          completed: false,
          userId: 5,
        }).unwrap();
        setInputValue('');
      } catch (err) {
        console.error('Failed to save the post: ', err);
      }
    }
  };

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new todo here"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="new-todo-button" onClick={onNewTodoClicked}>
        Create Todo
      </button>
    </div>
  );
}
