import React from 'react';
import PropTypes from 'prop-types';
import Task from '../Task';
import './TaskList.css';

function TaskList({ tasks, onToggleDone, deleteTodoItem }) {
  const elements = tasks.map((item) => (
    <Task key={item.id} todo={item} onToggleDone={onToggleDone} deleteTodoItem={deleteTodoItem} />
  ));
  return <ul className="todo-list">{elements}</ul>;
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object),
  onToggleDone: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  tasks: [],
};

export default TaskList;
