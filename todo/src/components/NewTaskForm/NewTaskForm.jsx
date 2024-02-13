import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  onInputValueChange(e) {
    this.setState({
      value: e.target.value,
    });
  }

  onFormSubmit(e) {
    e.preventDefault();
    const { value } = this.state;
    const { addTodoItem } = this.props;
    if (value.trim()) {
      addTodoItem(value);
    }
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    return (
      <header>
        <form onSubmit={this.onFormSubmit.bind(this)}>
          <input
            type="text"
            className="new-todo"
            placeholder="What needs to be done?"
            value={value}
            onChange={this.onInputValueChange.bind(this)}
          />
        </form>
      </header>
    );
  }
}

NewTaskForm.propTypes = {
  addTodoItem: PropTypes.func.isRequired,
};
