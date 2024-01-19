import React from "react";

function NewTaskForm() {
  return (
    <header>
      <h1>todos</h1>
      <input className="new-todo" placeholder="What needs to be done?" type="text" />
    </header>
  )
}

export default NewTaskForm;