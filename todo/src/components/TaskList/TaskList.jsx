import React from "react";
import Task from "../Task";

function TaskList() {
  return (
    <ul class="todo-list">
      <li class="completed">
        <Task description="Completed task" created="created 17 seconds ago" />
      </li>
      <li class="editing">
        <Task description="Editing task" created="created 17 seconds ago" />
        <input type="text" className="edit" value="Editing task" />
      </li>
      <li>
        <Task description="Active task" created="created 17 seconds ago" />
      </li>
    </ul>
  );
}

export default TaskList;