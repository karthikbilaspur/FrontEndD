// src/TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await axios.get(API_URL);
      setTasks(response.data);
      setError(null);
    } catch (error) {
      setError('Failed to fetch tasks');
    } finally {
      setLoading(false);
    }
  };

  const handleAddTask = async () => {
    try {
      if (!newTask.trim()) {
        throw new Error('Task title cannot be empty');
      }
      setLoading(true);
      const response = await axios.post(API_URL, {
        title: newTask,
        completed: false,
      });
      setTasks([...tasks, response.data]);
      setNewTask('');
      setError(null);
    } catch (error) {
      setError('Failed to add task');
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveTask = async (id) => {
    try {
      setLoading(true);
      await axios.delete(`${API_URL}/${id}`);
      setTasks(tasks.filter((task) => task.id !== id));
      setError(null);
    } catch (error) {
      setError('Failed to remove task');
    } finally {
      setLoading(false);
    }
  };

  const handleToggleCompleted = async (id) => {
    try {
      setLoading(true);
      const task = tasks.find((task) => task.id === id);
      const response = await axios.patch(`${API_URL}/${id}`, {
        completed: !task.completed,
      });
      setTasks(tasks.map((task) => (task.id === id ? response.data : task)));
      setError(null);
    } catch (error) {
      setError('Failed to update task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleToggleCompleted(task.id)}
              />
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
                {task.title}
              </span>
              <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;