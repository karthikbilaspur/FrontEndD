import React, { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');
  const [editing, setEditing] = useState(null);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { text: newTodo, done: false }]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo, i) => i !== index));
  };

  const toggleDone = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const editTodo = (index, text) => {
    setTodos(
      todos.map((todo, i) => (i === index ? { ...todo, text } : todo))
    );
    setEditing(null);
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.done;
    if (filter === 'done') return todo.done;
  });

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {filteredTodos.map((todo, index) => {
          const todoIndex = todos.indexOf(todo);
          return (
            <li key={todoIndex}>
              {editing === todoIndex ? (
                <input
                  type="text"
                  value={todo.text}
                  onChange={(e) => editTodo(todoIndex, e.target.value)}
                  onBlur={() => setEditing(null)}
                />
              ) : (
                <span
                  style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
                  onClick={() => toggleDone(todoIndex)}
                >
                  {todo.text}
                </span>
              )}
              <button onClick={() => setEditing(todoIndex)}>Edit</button>
              <button onClick={() => removeTodo(todoIndex)}>Remove</button>
            </li>
          );
        })}
      </ul>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={clearCompleted}>Clear Completed</button>
      </div>
    </div>
  );
}

export default TodoList;