import React from "react";
import Task from "../Task";
import "./TaskList.css";

function TaskList(props) {
  console.log(props.tasks)
  const {tasks, changeTodoItemState, deleteTodoItem} = props;
  const elements = tasks.map((item) => (
    <Task
      key={item.id}
      todo={item}
      changeTodoItemState={changeTodoItemState}
      deleteTodoItem={deleteTodoItem}
    />
  ));
  return (
    <ul className="todo-list">{elements}</ul>
  );
}

export default TaskList; 