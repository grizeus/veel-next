export interface TaskCounterProps {
  completed: number;
  active: number;
}

const TaskCounter = ({ completed, active }: TaskCounterProps) => {
  return (
    <div className="flex flex-col gap-1">
      <span className="">Active: { active}</span>
      <span className="">Completed: { completed}</span>
    </div>
  );
};

export default TaskCounter;
