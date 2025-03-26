import TaskForm from "@/app/components/task-form";
import TaskList from "@/app/components/task-list";
import AppBar from "@/app/components/appbar";
import { getTasks } from "@/lib/api";
import getQueryClient from "@/lib/utils/getQueryClient";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";

export default async function Home() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["tasks"],
    queryFn: () => getTasks(),
    staleTime: 60 * 1000,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <AppBar />
      <main className="mt-2 grow-1">
        <TaskForm />
        <TaskList />
      </main>
      <footer className="mt-2 flex h-9 items-center rounded bg-gray-100 p-1">
        <span className="text-base">
          &copy; 2025{" "}
          <a
            href="https://github.com/grizeus"
            target="_blank"
            rel="noopener noreferrer">
            grizeus
          </a>{" "}
        </span>
      </footer>
    </HydrationBoundary>
  );
}
