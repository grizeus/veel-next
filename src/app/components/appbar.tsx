import StatusFilter from "./status-fillter";
import TaskCounter from "./task-counter";

const AppBar = () => {
  return (
    <header className="">
      <h1 className="bg-gray-100 text-2xl font-bold">ToDo App</h1>
      <div className="flex justify-between">
        <section className="section grid gap-1">
          <h2 className="title text-lg font-semibold">Tasks</h2>
          <TaskCounter />
        </section>
        <section className="section grid gap-1">
          <h2 className="title text-lg font-semibold">Filter by status</h2>
          <StatusFilter />
        </section>
      </div>
    </header>
  );
};

export default AppBar;
