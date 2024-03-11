import { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import PropTypes, { func } from 'prop-types';

import './Task.css';

export default function Task({ onToggleDone, deleteTodoItem, todo }) {
  const { description, id, active, created } = todo;
  let currentClassName = 'active';

  if (!active) {
    currentClassName = 'completed';
  }

  return (
    <li className={currentClassName}>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          checked={!active}
          onChange={() => onToggleDone(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            {formatDistanceToNow(created, { includeSeconds: true })}
          </span>
        </label>
        <button className="icon icon-destroy" onClick={() => deleteTodoItem(id)}></button>
      </div>
    </li>
  );
}

Task.propTypes = {
  onToggleDone: PropTypes.func.isRequired,
  deleteTodoItem: PropTypes.func.isRequired,
  todo: PropTypes.shape({
    description: PropTypes.string,
    id: PropTypes.number,
    active: PropTypes.bool,
    created: PropTypes.instanceOf(Date),
  }),
};

Task.defaultProps = {
  todo: {},
};
