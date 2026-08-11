import React, { FC } from 'react';
import { Task } from '../types/types';

interface TaskItemProps {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TaskItem: FC<TaskItemProps> = ({ task, onToggle, onDelete }) => {
  return (
    <li
      style={{
        listStyle: 'none',
        padding: '12px 16px',
        marginBottom: '8px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        borderRadius: '10px',
        border: task.completed
          ? '1px solid #F8BBD0'
          : '1px solid #FCE4EC',
        background: task.completed ? '#FFF9FA' : '#FCE4EC55',
        transition: 'all 0.2s ease',
      }}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#D81B60' }}
      />
      <span
        style={{
          flex: 1,
          textDecoration: task.completed ? 'line-through' : 'none',
          color: task.completed ? '#AD1457aa' : '#4A0017',
          fontSize: '1rem',
        }}
      >
        {task.text}
      </span>
      <button
        onClick={() => onDelete(task.id)}
        aria-label="Eliminar tarea"
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          color: '#D81B60',
          fontSize: '1.3em',
          padding: '4px 8px',
          borderRadius: '6px',
        }}
      >
        🗑
      </button>
    </li>
  );
};

export default TaskItem;
