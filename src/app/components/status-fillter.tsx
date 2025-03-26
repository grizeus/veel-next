"use client";

import Button from "./button";

const StatusFilter = () => {
  return (
    <div className="flex gap-1">
      <Button selected onClick={() => console.log("all")}>
        All
      </Button>
      <Button selected onClick={() => console.log("active")}>
        Active
      </Button>
      <Button selected onClick={() => console.log("completed")}>
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
