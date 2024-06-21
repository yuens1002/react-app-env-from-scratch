import React from 'react';
import './TodoListItem.css';
import {
  useUpdateTodoStatusMutation,
  useDeleteTodoMutation,
} from '../service/apiSlice';

export function TodoListItem({ todo }) {
  const [updateTodoStatus] = useUpdateTodoStatusMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const onCompletedClicked = async () => {
    try {
      await updateTodoStatus({
        id: todo.id,
        completed: !todo.completed,
      }).unwrap();
    } catch (err) {
      console.error('Failed to update the status: ', err);
    }
  };

  const onDeleteClicked = async () => {
    try {
      await deleteTodo({
        id: todo.id,
      }).unwrap();
    } catch (err) {
      console.error('Failed to delete the todo: ', err);
    }
  };

  return (
    <div className="todo-item-container">
      <h3 className={todo.completed ? 'completed-text' : null}>
        {todo.todo}
      </h3>
      <div className="buttons-container">
        <button
          className="completed-button"
          onClick={onCompletedClicked}
        >
          {todo.completed ? 'Mark Incomplete' : 'Mark Completed'}
        </button>
        <button className="remove-button" onClick={onDeleteClicked}>
          Remove
        </button>
      </div>
    </div>
  );
}
