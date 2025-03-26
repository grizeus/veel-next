"use client";

import Button from "@/app/components/button";
import useStore from "@/lib/zustand/store";

const StatusFilter = () => {
  const selectedFilter = useStore(state => state.selectedFilter);
  const showAllTasks = useStore(state => state.showAllTasks);
  const filterActive = useStore(state => state.filterActive);
  const filterCompleted = useStore(state => state.filterCompleted);
  
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
