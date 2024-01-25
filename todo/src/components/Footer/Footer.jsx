import React, {Component} from "react";
import TasksFilter from "../TasksFilter";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    const {deleteCompletedTodos, activeTodosCounter} = this.props;
    return (
      <footer className="footer">
        <span className="todo-count">{activeTodosCounter} items left</span>
        <TasksFilter />
        <button className="clear-completed" onClick={deleteCompletedTodos}>Clear completed</button>
      </footer>
    )
  }
}
