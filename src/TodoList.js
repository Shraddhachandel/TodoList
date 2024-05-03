import React, { useState } from "react";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [taskId, setTaskId] = useState(1); 

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskId,
      content: taskInput
    };
    setTasks([...tasks, newTask]);
    setTaskId(taskId + 1); 
    setTaskInput("");
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskInput}
          onChange={handleChange}
          placeholder="Enter task"
        />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.content}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
