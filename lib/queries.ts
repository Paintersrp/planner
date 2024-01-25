import { QueryClient, type FetchQueryOptions } from "@tanstack/react-query"

export const usePrefetch = async (options: FetchQueryOptions) => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(options)

  return queryClient
}
