import { useQuery } from "@tanstack/react-query";
import { getTasks } from "../api";
import { useMemo } from "react";

export const useFetch = () => {
  const {
    data: tasks = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    staleTime: 60 * 1000,
  });

  return useMemo(
    () => ({
      tasks,
      isLoading,
      error,
    }),
    [tasks, isLoading, error]
  );
};
