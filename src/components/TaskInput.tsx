import React, { FC } from 'react';
import { TaskInputProps } from '../types/types';

const TaskInput: FC<TaskInputProps> = ({ value, onChange, onAdd }) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') onAdd();
  };
  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        style={{
          flex: 1,
          padding: '12px 16px',
          border: '1px solid #F8BBD0',
          borderRadius: '10px',
          fontSize: '1rem',
          outline: 'none',
          color: '#4A0017',
        }}
      />
      <button
        onClick={onAdd}
        style={{
          padding: '12px 20px',
          backgroundColor: '#F06292',
          border: 'none',
          borderRadius: '10px',
          color: '#fff',
          fontWeight: 'bold',
          cursor: 'pointer',
          boxShadow: '0 4px 10px rgba(240, 98, 146, 0.3)',
        }}
      >
        Agregar
      </button>
    </div>
  );
};

export default TaskInput;
