"use client";

import { useEffect, useState } from "react";

import TaskForm from "@/app/components/task-form";
import TaskList from "@/app/components/task-list";
import AppBar from "@/app/components/appbar";
import { getTasks } from "@/lib/api";
import { TaskI } from "@/app/components/task";

export default function Home() {
  const [tasks, setTasks] = useState<TaskI[]>([]);
  const [filteredTasks, setFilteredTasks] = useState<TaskI[]>([]);

  useEffect(() => {
    (async () => {
      const tasks = await getTasks();
      if (tasks) {
        setTasks(tasks);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredTasks(tasks);
  }, [tasks]);

  const completed = tasks.reduce(
    (acc, task) => acc + Number(task.completed),
    0
  );
  const active = tasks.length - completed;
  return (
    <>
      <AppBar
        completed={completed}
        active={active}
        tasks={tasks}
        setTasks={setFilteredTasks}
      />
      <main className="mt-2">
        <TaskForm setTasks={setTasks} tasks={tasks} />
        <TaskList tasks={filteredTasks} setTasks={setTasks} />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </>
  );
}
