import { getPlanner } from "@/actions/planner"
import { useQuery } from "@tanstack/react-query"

import { usePrefetch } from "@/lib/queries"

export const plannerQueryOptions = (id: string) => {
  return {
    queryKey: ["planner"],
    queryFn: async () => getPlanner(id),
    throwOnError: true,
  }
}

export const usePlannerPrefetch = async (id: string) => {
  return usePrefetch(plannerQueryOptions(id))
}

export const usePlannerQuery = (id: string) => {
  return useQuery(plannerQueryOptions(id))
}
