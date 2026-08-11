import { useState } from 'react';
import { Task } from '../types/types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return { tasks, input, setInput, addTask, toggleTask, deleteTask };
};
