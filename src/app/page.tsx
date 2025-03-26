
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
  const dehydeatedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydeatedState}>
      <AppBar />
      <main className="mt-2">
        <TaskForm />
        <TaskList />
      </main>
      <footer className="row-start-3 flex flex-wrap items-center justify-center gap-[24px]"></footer>
    </HydrationBoundary>
  );
}
