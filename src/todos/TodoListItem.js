import React from 'react';
import './TodoListItem.css';

const TodoListItem = ({
  todo,
  onRemovedPressed,
  onToggleCompleted,
}) => (
  <div className="todo-item-container">
    <h3 className={todo.isCompleted ? 'completed-text' : null}>
      {todo.text}
    </h3>
    <div className="buttons-container">
      <button
        className="completed-button"
        onClick={() => onToggleCompleted(todo.text)}
      >
        {todo.isCompleted ? 'Mark Incomplete' : 'Mark Completed'}
      </button>
      <button
        className="remove-button"
        onClick={() => onRemovedPressed(todo.text)}
      >
        Remove
      </button>
    </div>
  </div>
);

export default TodoListItem;
