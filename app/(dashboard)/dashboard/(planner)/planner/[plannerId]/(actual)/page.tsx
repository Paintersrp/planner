import type { FC } from "react"

import { PageContainer } from "@/components/layout/PageContainer"

import { MonthLinks } from "./components/MonthLinks"
import { Planner } from "./components/Planner"

interface PlannerPageProps {
  params: PlannerParams
}

const PlannerPage: FC<PlannerPageProps> = ({ params }) => {
  return (
    <PageContainer>
      <div className="grid grid-cols-2">
        <Planner />
        <MonthLinks />
      </div>
    </PageContainer>
  )
}

export default PlannerPage
