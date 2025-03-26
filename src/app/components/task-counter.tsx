import useStore from "@/lib/zustand/store";

const TaskCounter = () => {
  const tasks = useStore(state => state.tasks);

  const completed =
    tasks?.reduce((acc, task) => acc + Number(task.completed), 0) ?? 0;
  const active = tasks ? tasks?.length - completed : 0;

  return (
    <div className="flex flex-col gap-1">
      <span className="">Active: {active}</span>
      <span className="">Completed: {completed}</span>
    </div>
  );
};

export default TaskCounter;
