import React from 'react';
import './TodoListItem.css';

export function TodoListItem({
  todo,
  onRemovedPressed,
  onToggleCompleted,
}) {
  return (
    <div className="todo-item-container">
      <h3 className={todo.completed ? 'completed-text' : null}>
        {todo.todo}
      </h3>
      <div className="buttons-container">
        <button
          className="completed-button"
          onClick={() => onToggleCompleted(todo.todo)}
        >
          {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </button>
        <button
          className="remove-button"
          onClick={() => onRemovedPressed(todo.todo)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
