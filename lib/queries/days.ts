import { getDay, getDays } from "@/actions/days"
import { useQuery } from "@tanstack/react-query"

import { usePrefetch } from "@/lib/queries"

/**
 * Day by ID - Query, Prefetch, and Shared Options
 */
export const dayQueryOptions = (id: string) => {
  return {
    queryKey: ["day-data"],
    queryFn: async () => getDay(id),
    throwOnError: true,
  }
}

export const useDayPrefetch = async (id: string) => {
  return usePrefetch(dayQueryOptions(id))
}

export const useDayQuery = (id: string) => {
  return useQuery(dayQueryOptions(id))
}

/**
 * Days - Query, Prefetch, and Shared Options
 */
export const daysQueryOptions = {
  queryKey: ["days-data"],
  queryFn: getDays,
  throwOnError: true,
}

export const useDaysPrefetch = async () => {
  return usePrefetch(daysQueryOptions)
}

export const useDaysQuery = () => {
  return useQuery(daysQueryOptions)
}
