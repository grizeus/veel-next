import { useState, useCallback, useEffect } from "react";
import { TaskI } from "@/app/components/task";

export const useFilter = (tasks: TaskI[]) => {
  const [filteredTasks, setFilteredTasks] = useState(tasks);
  const [selectedFilter, setSelectedFilter] = useState("all");

  useEffect(() => {
    switch (selectedFilter) {
      case "active":
        setFilteredTasks(tasks.filter(task => !task.completed));
        break;
      case "completed":
        setFilteredTasks(tasks.filter(task => task.completed));
        break;
      default:
        setFilteredTasks(tasks);
    }
  }, [tasks, selectedFilter]);

  const showAllTasks = useCallback(() => {
    setSelectedFilter("all");
  }, []);

  const filterActive = useCallback(() => {
    setSelectedFilter("active");
  }, []);

  const filterCompleted = useCallback(() => {
    setSelectedFilter("completed");
  }, []);

  return {
    filteredTasks,
    selectedFilter,
    showAllTasks,
    filterActive,
    filterCompleted,
  };
};
