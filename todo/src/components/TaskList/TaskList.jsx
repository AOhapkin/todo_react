import React from "react";
import Task from "../Task";
import "./TaskList.css";

function TaskList(props) {
  const { tasks, onToggleDone, deleteTodoItem } = props;
  const elements = tasks.map((item) => (
    <Task
      key={item.id}
      todo={item}
      onToggleDone={onToggleDone}
      deleteTodoItem={deleteTodoItem}
    />
  ));
  return (
    <ul className="todo-list">{elements}</ul>
  );
}

export default TaskList; 