import React from 'react';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { connect } from 'react-redux';
import { removeTodo } from './actions';
import './TodoList.css';

const TodoList = ({ todos, onRemovePressed }) => (
  <div className="list-wrapper">
    <NewTodoForm />
    {todos.map((todo) => (
      <TodoListItem
        key={todo.text}
        todo={todo}
        onRemovedPressed={onRemovePressed}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(removeTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
