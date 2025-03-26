"use client";

import { Dispatch, SetStateAction } from "react";
import StatusFilter from "@/app/components/status-fillter";
import { TaskI } from "@/app/components/task";
import TaskCounter from "@/app/components/task-counter";


export interface AppBarProps {
  completed: number;
  active: number;
  tasks: TaskI[];
  setTasks: Dispatch<SetStateAction<TaskI[]>>;
}

const AppBar = () => {
  
  return (
    <header className="">
      <h1 className="bg-gray-100 text-2xl font-bold">ToDo App</h1>
      <div className="flex justify-between">
        <section className="section grid gap-1">
          <h2 className="title text-lg font-semibold">Tasks</h2>
          <TaskCounter />
        </section>
        <section className="section grid gap-1">
          <h2 className="title text-lg font-semibold">Filter by status</h2>
          <StatusFilter />
        </section>
      </div>
    </header>
  );
};

export default AppBar;
