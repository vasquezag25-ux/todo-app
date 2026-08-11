import React, { FC } from 'react';
import { Task } from '../types/types';
import TaskItem from './TaskItem';

interface TaskListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TaskList: FC<TaskListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {tasks.map((t) => (
        <TaskItem key={t.id} task={t} onToggle={toggleTask} onDelete={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
