"use client";

import { Dispatch, SetStateAction, useState } from "react";
import Button from "./button";
import { TaskI } from "./task";

export interface StatusFilterProps {
  tasks: TaskI[];
  onFilter: Dispatch<SetStateAction<TaskI[]>>;
}

const StatusFilter = ({ tasks, onFilter }: StatusFilterProps) => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const filterActive = () => {
    setSelectedFilter("active");
    const filtered = tasks.filter(task => !task.completed);
    onFilter(filtered);
  };

  const filterCompleted = () => {
    setSelectedFilter("completed");
    const filtered = tasks.filter(task => task.completed);
    onFilter(filtered);
  };

  const showAllTasks = () => {
    setSelectedFilter("all");
    onFilter(tasks);
  };

  return (
    <div className="flex gap-1">
      <Button selected={selectedFilter === "all"} onClick={showAllTasks}>
        All
      </Button>
      <Button selected={selectedFilter === "active"} onClick={filterActive}>
        Active
      </Button>
      <Button
        selected={selectedFilter === "completed"}
        onClick={filterCompleted}>
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
