import './TodoListItem.css';
import { apiSlice } from '../service/apiSlice';
import type { Todo } from '../lib/types';

type TodoListItemProps = {
  todo: Todo;
};

export default function TodoListItem({ todo }: TodoListItemProps) {
  const [updateTodoStatus] = apiSlice.useUpdateTodoStatusMutation();
  const [deleteTodo] = apiSlice.useDeleteTodoMutation();

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
      <h3 className={todo.completed ? 'completed-text' : undefined}>
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
