import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() === '') return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') addTask();
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  return (
    <div className="container">
      <header className="header">
        <h1>Mis tareas</h1>
        <p>Organiza tu día, una tarea a la vez.</p>
      </header>

      <div className="input-row">
        <input
          type="text"
          placeholder="Escribe una nueva tarea..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={addTask}>Agregar</button>
      </div>

      {tasks.length > 0 && (
        <div className="summary">
          <span>{tasks.length} TAREAS</span>
          <span>
            {completedCount} COMPLETADAS · {pendingCount} PENDIENTES
          </span>
        </div>
      )}

      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className="task-item">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>
              {task.text}
            </span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              🗑
            </button>
          </li>
        ))}
      </ul>

      {tasks.length === 0 && (
        <p className="empty-message">No tienes tareas todavía.</p>
      )}
    </div>
  );
}

export default App;
