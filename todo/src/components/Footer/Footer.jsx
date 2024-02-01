import React, {Component} from "react";
import PropTypes from "prop-types";
import TasksFilter from "../TasksFilter";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const {deleteCompletedTodos, activeTodosCounter, changeCurrentFilter, currentFilter} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{activeTodosCounter} items left</span>
        <TasksFilter
          changeCurrentFilter={changeCurrentFilter}
          currentFilter={currentFilter}
        />
        <button className="clear-completed" onClick={deleteCompletedTodos}>Clear completed</button>
      </footer>
    )
  }
}

Footer.propTypes = {
  deleteCompletedTodos: PropTypes.func.isRequired,
  activeTodosCounter: PropTypes.number,
  changeCurrentFilter: PropTypes.func.isRequired,
  currentFilter: PropTypes.string
};

Footer.defaultProps = {
  activeTodosCounter: 0,
  currentFilter: "All"
}