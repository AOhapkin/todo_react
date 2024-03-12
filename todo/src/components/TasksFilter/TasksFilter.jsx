import PropTypes from 'prop-types';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';

import './TasksFilter.css';

export default function TasksFilter({ onFilterChange, filterValue }) {
  const statuses = ['All', 'Active', 'Completed'];
  const statusButtons = statuses.map((status) => (
      <li key={nanoid()}>
        <button
          type="button"
          className={filterValue === status ? 'selected' : null}
          onClick={() => onFilterChange(status)}
        >
          {status}
        </button>
      </li>
    ));

  return <ul className="filters">{statusButtons}</ul>;
}

TasksFilter.propTypes = {
  onFilterChange: PropTypes.func,
  filterValue: PropTypes.oneOf(['All', 'Active', 'Completed']),
};

TasksFilter.defaultProps = {
  onFilterChange: () => {},
  filterValue: 'All',
};
