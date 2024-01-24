"use client"

import {
  MutationFunction,
  QueryFunction,
  useMutation,
  useQuery,
} from "@tanstack/react-query"

interface UseQueryWithMutations {
  queryFn: QueryFunction<any, any>
  queryKey: string[]
  createFn: MutationFunction<any, any>
  updateFn: MutationFunction<any, any>
  deleteFn: MutationFunction<any, any>
}

export function useQueryWithMutations({
  queryFn,
  queryKey,
  createFn,
  updateFn,
  deleteFn,
}: UseQueryWithMutations) {
  const { data, refetch } = useQuery({
    queryKey,
    queryFn,
  })

  const { mutate: createMutation } = useMutation({
    mutationFn: createFn,
    onSuccess: () => {
      refetch()
    },
  })

  const { mutate: updateMutation } = useMutation({
    mutationFn: updateFn,
    onSuccess: () => {
      refetch()
    },
  })
  const { mutate: deleteMutation } = useMutation({
    mutationFn: deleteFn,
    onSuccess: () => {
      refetch()
    },
  })

  return { data, createMutation, updateMutation, deleteMutation }
}
