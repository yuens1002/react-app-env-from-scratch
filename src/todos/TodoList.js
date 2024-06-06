import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo, toggleCompleted } from './actions';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed, onToggleCompleted }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovedPressed={onRemovePressed}
        onToggleCompleted={onToggleCompleted}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onToggleCompleted: (text) => dispatch(toggleCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
