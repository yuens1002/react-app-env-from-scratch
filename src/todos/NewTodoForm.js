import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions';
import './NewTodoForm.css';

const NewTodoForm = ({ todos, onCreatePressed }) => {
  console.log('todos: ', todos);
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
          const isDuplicateText = todos.some((todo) => {
            todo.text === inputValue;
          });
          if (isDuplicateText) {
            setInputValue('todo already exists');
          } else {
            onCreatePressed(inputValue);
            setInputValue('');
          }
        }}
      >
        Create Todo
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewTodoForm);
