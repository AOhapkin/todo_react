import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TasksFilter from '../TasksFilter';
import './Footer.css';

export default function Footer({ onFilterChange, count, deleteAllDone, filterValue }) {
  return (
    <footer className="footer">
      <span className="todo-count">{count} items left</span>
      <TasksFilter onFilterChange={onFilterChange} filterValue={filterValue} />
      <button type="button" className="clear-completed" onClick={deleteAllDone}>
        Clear completed
      </button>
    </footer>
  )
}

Footer.propTypes = {
  onFilterChange: PropTypes.func,
  deleteAllDone: PropTypes.func,
  count: PropTypes.number,
  filterValue: PropTypes.oneOf(['All', 'Active', 'Completed']),
}

Footer.defaultProps = {
  onFilterChange: () => {},
  deleteAllDone: () => {},
  count: 0,
  filterValue: 'All',
}
