import TaskForm from "./components/task-form";
import TaskList from "./components/task-list";

export default function Home() {
  return (
    <>
      <main className="mt-2">
        <TaskForm />
        <TaskList  />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </>
  );
}
