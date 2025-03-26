"use client";

import { FormEvent } from "react";
import Button from "@/app/components/button";
import { createTask } from "@/lib/api";
import { TaskListProps } from "@/app/components/task-list";

const TaskForm = ({ tasks, setTasks }: TaskListProps) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form.elements[0] as HTMLInputElement).value;
    if (value) {
      const res = await createTask({
        title: value.trim(),
        completed: false,
        userId: 1,
      });
      setTasks([...tasks, res]);
    }
    form.reset();
  };

  return (
    <form className="flex gap-1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your task..."
        className="grow rounded border border-gray-300 px-3 py-2 text-inherit transition-colors duration-300 ease-in-out hover:border-sky-700 focus:border-sky-700 focus:outline-none active:border-sky-800"
      />
      <Button type="submit">Add Task</Button>
    </form>
  );
};

export default TaskForm;
