"use client"

import type { FC } from "react"
import { useParams } from "next/navigation"

import { usePlannerQuery } from "@/lib/queries/planner"
import { DevCode } from "@/components/ui/DevCode"

interface PlannerProps {
  //
}

const Planner: FC<PlannerProps> = ({}) => {
  const { plannerId } = useParams<PlannerParams>()
  const { data } = usePlannerQuery(plannerId)

  return <DevCode data={data} />
}

export { Planner }
