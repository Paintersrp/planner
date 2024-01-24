"use client"

import type { FC } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"
import { getPlanner } from "@/actions/planners"
import { useQuery } from "@tanstack/react-query"

import { buttonVariants } from "@/components/ui/Button"

interface MonthLinksProps {
  // Add your prop types here
}

const MonthLinks: FC<MonthLinksProps> = ({}) => {
  const { plannerId } = useParams<{ plannerId: string }>()

  const { data } = useQuery({
    queryKey: ["planner"],
    queryFn: async () => getPlanner(plannerId),
  })

  const baseHref = `/dashboard/planner/${plannerId}/year`

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data?.years.map((year) => (
        <div className="flex flex-col gap-4">
          <Link
            className={buttonVariants({ variant: "link", className: "border" })}
            href={`${baseHref}/${year.id}`}
          >
            {year.name}
          </Link>
          <div className="flex flex-col gap-4">
            {year.months.map((month) => (
              <div className="flex flex-col gap-4">
                <Link
                  className={buttonVariants({
                    variant: "link",
                    className: "border",
                  })}
                  href={`${baseHref}/${year.id}/month/${month.id}`}
                >
                  {month.name}
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {month.days.map((day) => (
                    <Link
                      className={buttonVariants({
                        variant: "link",
                        className: "border",
                      })}
                      href={`${baseHref}/${year.id}/month/${month.id}/day/${day.id}`}
                    >
                      {day.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export { MonthLinks }
