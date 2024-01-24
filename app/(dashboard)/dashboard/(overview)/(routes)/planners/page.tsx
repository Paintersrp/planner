import type { FC } from "react"

import { PageContainer } from "@/components/layout/PageContainer"

import { Planners } from "./components/Planners"

interface PlannersPageProps {
  // Add your prop types here
}

const PlannersPage: FC<PlannersPageProps> = ({}) => {
  return (
    <PageContainer>
      <div>Planners Page</div>
      <Planners />
    </PageContainer>
  )
}

export default PlannersPage
