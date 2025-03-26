"use client";

import { Dispatch, SetStateAction } from "react";
import Task, { TaskI } from "@/app/components/task";
import { deleteTask } from "@/lib/api";

export interface TaskListProps {
  tasks: TaskI[];
  setTasks: Dispatch<SetStateAction<TaskI[]>>;
}

const TaskList = ({tasks, setTasks}: TaskListProps) => {

  const handleDelete = async (id: number) => {
    const task = await deleteTask(id);
    if (task) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };
  return (
    <ul className="mt-0 list-none p-0">
      {Array.isArray(tasks) &&
        tasks.length > 0 &&
        tasks.map(task => (
          <li key={task.id} className="border-gray-600 not-first:border-t">
            <Task task={task} onDelete={handleDelete} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
