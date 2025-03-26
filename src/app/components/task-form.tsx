"use client";

import { FormEvent } from "react";
import Button from "./button";

const TaskForm = () => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
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
