import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [priority, setPriority] = useState('Low');
  const [dueDate, setDueDate] = useState(new Date());
  const [category, setCategory] = useState('Personal');
  const [filter, setFilter] = useState('All');
  const [editingTodo, setEditingTodo] = useState(null);
  const [history, setHistory] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const handleAddTodo = () => {
    const newTodoItem = { id: Date.now(), text: newTodo, priority, dueDate, category, completed: false };
    setTodos([...todos, newTodoItem]);
    setNewTodo('');
    setPriority('Low');
    setDueDate(new Date());
    setCategory('Personal');
    saveHistory([...todos, newTodoItem]);
  };

  const handleToggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(updatedTodos);
    saveHistory(updatedTodos);
  };

  const handleRemoveTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
    saveHistory(updatedTodos);
  };

  const handleEditTodo = (id, text) => {
    const updatedTodos = todos.map((todo) => (todo.id === id ? { ...todo, text } : todo));
    setTodos(updatedTodos);
    saveHistory(updatedTodos);
    setEditingTodo(null);
  };

  const saveHistory = (updatedTodos) => {
    const newHistory = [...history.slice(0, currentIndex + 1), updatedTodos];
    setHistory(newHistory);
    setCurrentIndex(currentIndex + 1);
  };

  const undo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setTodos(history[currentIndex - 1]);
    }
  };

  const redo = () => {
    if (currentIndex < history.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTodos(history[currentIndex + 1]);
    }
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const updatedTodos = [...todos];
    const [removed] = updatedTodos.splice(result.source.index, 1);
    updatedTodos.splice(result.destination.index, 0, removed);
    setTodos(updatedTodos);
    saveHistory(updatedTodos);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Pending') return !todo.completed;
    return todo.category === filter;
  });

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <DatePicker selected={dueDate} onChange={(date) => setDueDate(date)} />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="Personal">Personal</option>
          <option value="Work">Work</option>
          <option value="Shopping">Shopping</option>
        </select>
        <button onClick={handleAddTodo}>Add Todo</button>
        <div>
          <button onClick={() => setFilter('All')}>All</button>
          <button onClick={() => setFilter('Completed')}>Completed</button>
          <button onClick={() => setFilter('Pending')}>Pending</button>
          <button onClick={() => setFilter('Personal')}>Personal</button>
          <button onClick={() => setFilter('Work')}>Work</button>
          <button onClick={() => setFilter('Shopping')}>Shopping</button>
        </div>
        <button onClick={undo}>Undo</button>
        <button onClick={redo}>Redo</button>
        <Droppable droppableId="droppable">
          {(provided) => (
            <ul {...provided.droppableProps} ref={provided.innerRef}>
              {filteredTodos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                  {(provided) => (
                    <li
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                    >
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => handleToggleTodo(todo.id)}
                      />
                      {editingTodo === todo.id ? (
                        <input
                          type="text"
                          value={todo.text}
                          onChange={(e) => handleEditTodo(todo.id, e.target.value)}
                        />
                      ) : (
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                          {todo.text} ({todo.priority}) - Due: {new Date(todo.dueDate).toLocaleDateString()} - {todo.category}
                        </span>
                      )}
                      <button onClick={() => setEditingTodo(todo.id)}>Edit</button>
                      <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
                    </li>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
};

export default TodoList;