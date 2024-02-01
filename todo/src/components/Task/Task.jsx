import React, {Component} from "react";
import {formatDistanceToNow} from "date-fns";

import "./Task.css";

export default class Task extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { onToggleDone, deleteTodoItem, todo } = this.props;
    const {description, id, active, created} = todo;
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
            onChange={() => onToggleDone(id)} />
          <label>
            <span className="description">{description}</span>
            <span className="created">{formatDistanceToNow(created, {includeSeconds: true})}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy" onClick={() => deleteTodoItem(id)}></button>
        </div>
      </li>
    )
  }
}