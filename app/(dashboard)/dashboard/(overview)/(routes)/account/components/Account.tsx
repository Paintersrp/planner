"use client"

import type { FC } from "react"
import { getUserData } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

import { DevCode } from "@/components/ui/DevCode"

interface AccountProps {
  //
}

const Account: FC<AccountProps> = ({}) => {
  const { data } = useQuery({
    queryKey: ["user-data"],
    queryFn: getUserData,
  })

  return <DevCode data={data} />
}

export { Account }
