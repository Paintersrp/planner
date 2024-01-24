"use client"

import type { FC } from "react"
import { useParams } from "next/navigation"
import { getPlanner } from "@/actions/planners"
import { useQuery } from "@tanstack/react-query"

import { DevCode } from "@/components/ui/DevCode"

interface PlannerProps {
  //
}

const Planner: FC<PlannerProps> = ({}) => {
  const { plannerId } = useParams<{ plannerId: string }>()

  const { data } = useQuery({
    queryKey: ["planner"],
    queryFn: async () => getPlanner(plannerId),
  })

  return <DevCode data={data} />
}

export { Planner }
