"use client";

import { FormEvent } from "react";
import Button from "@/app/components/button";
import { createTask } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { useMutation } from "@tanstack/react-query";
import { TaskI } from "./task";

const TaskForm = () => {
  const queryClient = getQueryClient();

  const createMutation = useMutation({
    mutationFn: createTask,
    onMutate: async newTask => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const previousTasks = queryClient.getQueryData(["tasks"]);
      console.log(previousTasks);
      queryClient.setQueryData(["tasks"], (old: TaskI[]) => {
        if (old) {
          return old.concat(newTask);
        }
      });
      return { prev: previousTasks };
    },
    onError: (err, newTask, context) => {
      if (context?.prev) {
        queryClient.setQueryData(["tasks"], context.prev);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const value = (form.elements[0] as HTMLInputElement).value;
    if (value) {
      createMutation.mutate({
        title: value.trim(),
        completed: false,
        id: Date.now(),
        userId: 1,
      });
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
