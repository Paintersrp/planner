import type { FC } from "react"

import { PageContainer } from "@/components/layout/PageContainer"

import { MonthLinks } from "./components/MonthLinks"
import { Planner } from "./components/Planner"

interface PlannerPageProps {
  params: { plannerId: string }
}

const PlannerPage: FC<PlannerPageProps> = ({ params }) => {
  return (
    <PageContainer>
      {params.plannerId}
      <div className="grid grid-cols-2">
        <Planner />
        <MonthLinks />
      </div>
    </PageContainer>
  )
}

export default PlannerPage
