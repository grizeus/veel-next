"use client";

import { useEffect, useState } from "react";
import Task, { TaskI } from "./task";
import { getTasks } from "@/lib/api";

const TaskList = () => {
  const [tasks, setTasks] = useState<TaskI[]>([]);

  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      if (tasks) {
        setTasks(tasks);
      }
    })();
  }, []);
  return (
    <ul className="m-0 list-none p-0">
      {Array.isArray(tasks) &&
        tasks.length > 0 &&
        tasks.map(task => (
          <li key={task.id} className="border-t border-gray-600">
            <Task completed={task.completed} title={task.title} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
