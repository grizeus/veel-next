"use client";

import StatusFilter from "@/app/components/status-fillter";
import TaskCounter from "@/app/components/task-counter";

const AppBar = () => {
  return (
    <header className="">
      <h1 className="rounded bg-gray-100 p-1 text-2xl font-bold">ToDo App</h1>
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
