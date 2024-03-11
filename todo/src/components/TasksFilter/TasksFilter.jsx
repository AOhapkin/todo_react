import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TasksFilter.css';

export default function TasksFilter({ currentFilter, changeCurrentFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          onClick={() => changeCurrentFilter('All')}
          className={currentFilter === 'All' ? 'selected' : null}
        >
          All
        </button>
      </li>
      <li>
        <button
          onClick={() => changeCurrentFilter('Active')}
          className={currentFilter === 'Active' ? 'selected' : null}
        >
          Active
        </button>
      </li>
      <li>
        <button
          onClick={() => changeCurrentFilter('Completed')}
          className={currentFilter === 'Completed' ? 'selected' : null}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}

TasksFilter.propTypes = {
  currentFilter: PropTypes.string,
  changeCurrentFilter: PropTypes.func.isRequired,
};

TasksFilter.defaultProps = {
  currentFilter: 'All',
};
