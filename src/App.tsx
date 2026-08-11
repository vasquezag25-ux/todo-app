import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useTasks } from './hooks/useTasks';

const App: React.FC = () => {
  const { tasks, input, setInput, addTask, toggleTask, deleteTask } = useTasks();

  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = tasks.length - completedCount;

  const sortedTasks = [
    ...tasks.filter(t => !t.completed),
    ...tasks.filter(t => t.completed),
  ];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #FCE4EC 0%, #F8BBD0 100%)',
        padding: '40px 16px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div
        style={{
          maxWidth: '520px',
          margin: '0 auto',
          background: '#fff',
          borderRadius: '16px',
          boxShadow: '0 10px 30px rgba(255, 146, 162, 0.25)',
          padding: '32px',
        }}
      >
        <header style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{ margin: '0 0 8px', color: '#D81B60', fontSize: '2rem' }}>
            Mis tareas
          </h1>
          <p style={{ margin: 0, color: '#AD1457' }}>
            Organiza tu día, una tarea a la vez.
          </p>
        </header>

        <TaskInput value={input} onChange={setInput} onAdd={addTask} />

        {tasks.length > 0 && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              marginBottom: '16px',
              padding: '12px 16px',
              background: '#FCE4EC',
              borderRadius: '8px',
              color: '#880E4F',
              fontWeight: 'bold',
              fontSize: '0.9rem',
            }}
          >
            <span>{tasks.length} TAREAS</span>
            <span>{completedCount} ✓ · {pendingCount} ○</span>
          </div>
        )}

        <TaskList tasks={sortedTasks} toggleTask={toggleTask} deleteTask={deleteTask} />

        {tasks.length === 0 && (
          <p style={{ textAlign: 'center', color: '#AD1457', marginTop: '24px' }}>
            No tienes tareas todavía.
          </p>
        )}
      </div>
    </div>
  );
};

export default App;
