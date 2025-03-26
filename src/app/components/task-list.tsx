"use client";

import Task, { TaskI } from "@/app/components/task";
import { deleteTask } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { useFetch } from "@/lib/utils/useFetch";
import useStore from "@/lib/zustand/store";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";

const TaskList = () => {
  const queryClient = getQueryClient();

  const { tasks } = useFetch();
  const setTasks = useStore(state => state.setTasks);
  const filteredTasks = useStore(state => state.filteredTasks);
  const removeTask = useStore(state => state.removeTask);
  
  useEffect(() => {
    setTasks(tasks);
  }, [tasks, setTasks]);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteTask,
    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const previousTasks = queryClient.getQueryData(["tasks"]);
      queryClient.setQueryData(["tasks"], (old: TaskI[]) => {
        if (old) {
          return old.filter(task => task.id !== id);
        }
      });

      return { previousTasks };
    },
    onError: (err, newTodo, context) => {
      queryClient.setQueryData(["tasks"], context?.previousTasks);
    },
    onSettled: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const handleDelete = async (id: number) => {
    removeTask(id);
    await mutateAsync(id);
  };

  return (
    <ul className="mt-0 list-none p-0">
      {Array.isArray(filteredTasks) &&
        filteredTasks.length > 0 &&
        filteredTasks.map(task => (
          <li key={task.id} className="border-gray-600 not-first:border-t">
            <Task task={task} onDelete={handleDelete} pending={isPending} />
          </li>
        ))}
    </ul>
  );
};

export default TaskList;
