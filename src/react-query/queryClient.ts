import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
      cacheTime: 1000 * 60 * 5,
      refetchOnReconnect: true,
      refetchOnMount: false,
      retry: 2,
    },
  },
});
