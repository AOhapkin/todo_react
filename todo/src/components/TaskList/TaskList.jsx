import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';

import './TaskList.css';

export default function TaskList({
  todos,
  toCompleted,
  deleteItem,
  toEditing,
  onEditingSubmit,
  startTimer,
  stopTimer,
}) {
  const listOfTasks = todos.map((todo) => {
    let ListItemClasses = todo.done ? 'completed' : '';
    if (!todo.done && todo.editing) {
      ListItemClasses += 'editing';
    }

    return (
      <li className={ListItemClasses} key={todo.id}>
        <Task
          description={todo.description}
          created={todo.created}
          done={todo.done}
          editing={todo.editing}
          remainingTime={todo.remainingTime}
          toggleComplete={() => toCompleted(todo.id)}
          onDeleted={() => deleteItem(todo.id)}
          toEditing={() => toEditing(todo.id)}
          onEditingSubmit={(text) => onEditingSubmit(todo.id, text)}
          startTimer={() => startTimer(todo.id)}
          stopTimer={() => stopTimer(todo.id)}
          id={todo.id}
        />
      </li>
    );
  });

  return <ul className="todo-list">{listOfTasks}</ul>;
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object),
  toCompleted: PropTypes.func,
  deleteItem: PropTypes.func,
  toEditing: PropTypes.func,
  onEditingSubmit: PropTypes.func,
  startTimer: PropTypes.func,
  stopTimer: PropTypes.func,
};

TaskList.defaultProps = {
  todos: [],
  toCompleted: () => {},
  deleteItem: () => {},
  toEditing: () => {},
  onEditingSubmit: () => {},
  startTimer: () => {},
  stopTimer: () => {},
};