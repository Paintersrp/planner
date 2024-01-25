"use client"

import type { FC } from "react"
import Link from "next/link"
import { useParams } from "next/navigation"

import { usePlannerQuery } from "@/lib/queries/planner"
import { buttonVariants } from "@/components/ui/Button"

interface MonthLinksProps {
  // Add your prop types here
}

const MonthLinks: FC<MonthLinksProps> = ({}) => {
  const { plannerId } = useParams<PlannerParams>()
  const { data } = usePlannerQuery(plannerId)

  const baseHref = `/dashboard/planner/${plannerId}/year`
  const linkClass = buttonVariants({ variant: "link", className: "border" })

  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {data?.years.map((year) => (
        <div className="flex flex-col gap-4" key={year.id}>
          <Link className={linkClass} href={`${baseHref}/${year.id}`}>
            {year.name}
          </Link>
          <div className="flex flex-col gap-4">
            {year.months.map((month) => (
              <div className="flex flex-col gap-4" key={month.id}>
                <Link
                  className={linkClass}
                  href={`${baseHref}/${year.id}/month/${month.id}`}
                >
                  {month.name}
                </Link>
                <div className="grid grid-cols-2 gap-2">
                  {month.days.map((day) => (
                    <Link
                      key={day.id}
                      className={linkClass}
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
