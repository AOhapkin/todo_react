import { useState } from 'react';
import PropTypes from 'prop-types';

import './NewTaskForm.css';

export default function NewTaskForm({ addTodoItem }) {
  const [value, setValue] = useState('');


  const onInputValueChange = (e) => {
    setValue(e.target.value);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (value.trim()) {
      addTodoItem(value);
      setValue('');
    }
  }

  return (
    <header>
      <h1>Todos</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          className="new-todo"
          placeholder="What needs to be done?"
          value={value}
          onChange={onInputValueChange}
        />
        {/* <input 
          type="number"
          className="new-todo-form__timer"
          placeholder="Min"
          autofocus
        />
        <input 
          type="number"
          className="new-todo-form__timer"
          placeholder="Sec"
          autofocus
        /> */}
      </form>
    </header>
  );
}

NewTaskForm.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
