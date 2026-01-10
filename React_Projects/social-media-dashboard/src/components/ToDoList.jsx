import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-lg font-bold">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task"
        className="w-full p-2 border rounded-md"
      />
      <button onClick={addTask} className="mt-2 bg-blue-500 text-white p-2 rounded-md">
        Add Task
      </button>
      <ul className="mt-2">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;