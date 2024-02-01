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
        // {description: 'eat', created: 'created 5 min ago', id: 1, active: true},
        // {description: 'sleep', created: 'created 7 min ago', id: 2, active: false},
        // {description: 'play', created: 'created 66 min ago', id: 3, active: false},
        // {description: 'repeat', created: 'created 33 min ago', id: 4, active: true}
      ],
      filter: 'All'
    }
  }

  toggleItemProperty(arr, id, propName) {
    const idx = arr.findIndex((item) => item.id === id);
    const oldItem = arr[idx];
    const newItem = {...oldItem,
      [propName]: !oldItem[propName]};
    
    return [
      ...arr.slice(0, idx),
      newItem,
      ...arr.slice(idx + 1)
    ];
  }

  onToggleDone(id) {
    this.setState(({todoData}) => {
      return {
        todoData: this.toggleItemProperty(todoData, id, 'active')
      }
    });
  }

  addTodoItem(todoText) {
    const newTodoItem = {
      description: todoText,
      created: new Date(),
      id: this.state.todoData.length + 1,
      active: true
    }
    this.setState((state) => ({
      todoData: [...state.todoData, newTodoItem]
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

  changeCurrentFilter(filterName) {
    console.log(filterName);
    this.setState({
      filter: filterName
    });
  }

  showFilteredTasks(filterName) {
    console.log(filterName);
    if (filterName === 'Active') {
      return this.state.todoData.filter((todoItem) => todoItem.active)
    } else if (filterName === 'Completed') {
      return this.state.todoData.filter((todoItem) => !todoItem.active)
    } else {
      return this.state.todoData;
    }
  }

  render() {
    const activeTodosCounter = this.state.todoData.filter((todoItem) => {
      return todoItem.active;
    }).length;
    return (
      <section className="todoapp">
        <NewTaskForm
          addTodoItem={this.addTodoItem.bind(this)}
        />
        <section className="main">
          <TaskList 
            tasks={this.showFilteredTasks(this.state.filter)}
            onToggleDone={this.onToggleDone.bind(this)}
            deleteTodoItem={this.deleteTodoItem.bind(this)}
          />
          <Footer
            changeCurrentFilter={this.changeCurrentFilter.bind(this)}
            currentFilter={this.state.filter}
            deleteCompletedTodos={this.deleteCompletedTodos.bind(this)}
            activeTodosCounter={activeTodosCounter}
          />
        </section>
      </section>
    );
  }
}
