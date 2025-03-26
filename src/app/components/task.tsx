"use client";

import clsx from "clsx";
import { useState } from "react";
import { MdClose } from "react-icons/md";

export interface TaskI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TaskProps {
  task: Omit<TaskI, "userId">;
  onDelete: (id: number) => void;
  pending: boolean;
}

const Task = ({ task, onDelete, pending }: TaskProps) => {
  const [isCompleted, setCompleted] = useState(task.completed);
  return (
    <div className="flex items-center gap-3 py-2">
      <input
        type="checkbox"
        className="size-5 shrink-0 cursor-pointer"
        checked={isCompleted}
        onChange={() => setCompleted(!isCompleted)}
      />
      <p className="grow">{task.title}</p>
      <button
        className={clsx(
          pending && "cursor-auto text-gray-500",
          "m-0 flex size-8 cursor-pointer items-center justify-center rounded bg-transparent p-0 text-red-500 transition-colors duration-300 ease-in-out hover:bg-zinc-200 focus:bg-zinc-200 active:bg-zinc-300"
        )}
        onClick={() => onDelete(task.id)}>
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
