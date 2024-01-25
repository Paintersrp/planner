import { getUserData } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

import { usePrefetch } from "@/lib/queries"

export const userQueryOptions = {
  queryKey: ["user-data"],
  queryFn: getUserData,
  throwOnError: true,
}

export const useUserPrefetch = async () => {
  return usePrefetch(userQueryOptions)
}

export const useUserQuery = () => {
  return useQuery(userQueryOptions)
}
