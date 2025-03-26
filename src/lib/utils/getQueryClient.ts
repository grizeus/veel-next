import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
          refetchOnReconnect: true,
          retry: 1,
        },
      },
    })
) as () => QueryClient;

export default getQueryClient;
