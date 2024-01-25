import React, {Component} from "react";
import "./App.css";
import NewTaskForm from "./components/NewTaskForm/NewTaskForm";
import TaskList from "./components/TaskList/TaskList"
import Footer from "./components/Footer/Footer"

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      todoData: [
        {description: 'eat', created: 'created 5 min ago', id: 1, active: true},
        {description: 'sleep', created: 'created 7 min ago', id: 2, active: false},
        {description: 'play', created: 'created 66 min ago', id: 3, active: false},
        {description: 'repeat', created: 'created 33 min ago', id: 4, active: true}
      ]
    }
  }

  changeTodoItemState(id) {
    this.setState((state) => ({
      todoData: state.todoData.map((todoItem) => {
        if (todoItem.id === id) {
          todoItem.active = !todoItem.active;
        }
        return todoItem;
      })
    }));
  }

  deleteTodoItem(id) {
    this.setState((state) => ({
      todoData: state.todoData.filter((todoItem) => {
        return todoItem.id !== id;
      })
    }));
  }

  deleteCompletedTodos() {
    this.setState((state) => ({
      todoData: state.todoData.filter((todoItem) => {
        return todoItem.active;
      })
    }));
  }

  render() {
    console.log(this.state.todoData);
    return (
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList 
            tasks={this.state.todoData}
            changeTodoItemState={this.changeTodoItemState.bind(this)}
            deleteTodoItem={this.deleteTodoItem.bind(this)}
          />
          <Footer
            deleteCompletedTodos={this.deleteCompletedTodos.bind(this)}
          />
        </section>
      </section>
    );
  }
}
