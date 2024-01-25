"use client"

import type { FC } from "react"

import { useUserQuery } from "@/lib/queries/user"
import { DevCode } from "@/components/ui/DevCode"

interface PlannersProps {
  //
}

const Planners: FC<PlannersProps> = ({}) => {
  const { data } = useUserQuery()

  return <DevCode data={data} />
}

export { Planners }
