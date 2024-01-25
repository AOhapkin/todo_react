import React from "react";
import Task from "../Task";
import "./TaskList.css";

function TaskList(props) {
  console.log(props.tasks)
  const {tasks, changeTodoItemState} = props;
  const elements = tasks.map((item) => (
    <Task
      key={item.id}
      todo={item}
      changeTodoItemState={changeTodoItemState}
    />
  ));
  return (
    <ul className="todo-list">{elements}</ul>
  );
}

export default TaskList; 