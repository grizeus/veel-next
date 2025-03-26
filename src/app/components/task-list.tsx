"use client";

import Task, { TaskI } from "@/app/components/task";
import { deleteTask } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { useFetch } from "@/lib/utils/useFetch";
import { useFilter } from "@/lib/utils/useFilter";
import { useMutation } from "@tanstack/react-query";

const TaskList = () => {
  const { tasks } = useFetch();
  const { filteredTasks, selectedFilter } = useFilter(tasks);
  console.log(selectedFilter, filteredTasks);
  const queryClient = getQueryClient();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deleteTask,
    onMutate: async id => {
      await queryClient.cancelQueries({ queryKey: ["tasks"] });
      const previousTasks = queryClient.getQueryData(["tasks"]);
      console.log(previousTasks);
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
