import React from "react";
import Task from "../Task";
import "./TaskList.css";

function TaskList(props) {
  console.log(props.tasks)
  const todoData = props.tasks;
  // console.log(props.tasks)
  const elements = todoData.map((item) => (
    <Task
      taskId={item.id}
      active={item.active}
      description={item.description}
      created={item.created}
      key={item.id}
    />
  ));
  return (
    <ul className="todo-list">{elements}</ul>
  );
}

export default TaskList; 