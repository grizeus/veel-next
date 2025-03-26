"use client";

import { MdClose } from "react-icons/md";

export interface TaskI {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const Task = ({ completed, title }: Omit<TaskI, "userId" | "id">) => {
  return (
    <div className="flex items-center gap-3 py-2">
      <input
        type="checkbox"
        className="size-5 shrink-0 cursor-pointer"
        checked={completed}
        onChange={() => {}}
      />
      <p className="grow">{title}</p>
      <button className="m-0 flex size-8 cursor-pointer items-center justify-center rounded bg-transparent p-0 text-red-500 transition-colors duration-300 ease-in-out hover:bg-zinc-200 focus:bg-zinc-200 active:bg-zinc-300">
        <MdClose size={24} />
      </button>
    </div>
  );
};

export default Task;
