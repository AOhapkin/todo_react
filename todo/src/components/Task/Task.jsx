import React, {Component} from "react";
import "./Task.css";

export default class Task extends Component {
  constructor(props) {
    super();
    this.props = props;
  }

  render() {
    const { description, created, id, active } = this.props;

    console.log(active)

    let currentClassName = 'active';

    if (!active) {
      currentClassName = 'completed';
    }

    return (
      <li className={currentClassName}>
        <div className="view">
          <input className="toggle" type="checkbox" />
          <label>
            <span className="description">{description}</span>
            <span className="created">{created}</span>
          </label>
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"></button>
        </div>
      </li>
    )
  }
}