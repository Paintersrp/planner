"use client"

import type { FC } from "react"
import { getUserData } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

import { DevCode } from "@/components/ui/DevCode"

interface PlannersProps {
  //
}

const Planners: FC<PlannersProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["user-data"],
    queryFn: getUserData,
  })

  return <DevCode data={data} />
}

export { Planners }
