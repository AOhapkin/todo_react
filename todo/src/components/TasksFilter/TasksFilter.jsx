import React, {Component} from "react";
import "./TasksFilter.css";

export default class TasksFilter extends Component {
  render() {
    const {currentFilter, changeCurrentFilter} = this.props;
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
    )
  }
}
