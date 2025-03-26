"use client";

import Button from "@/app/components/button";
import { useFilter } from "@/lib/utils/useFilter";
import { useFetch } from "@/lib/utils/useFetch";

const StatusFilter = () => {
  const { tasks } = useFetch();
  const { filteredTasks, selectedFilter, showAllTasks, filterActive, filterCompleted } =
    useFilter(tasks);
  console.log(selectedFilter,filteredTasks);
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
