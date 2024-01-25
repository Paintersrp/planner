import type { FC } from "react"

import { Icons } from "@/components/ui/Icons"
import { Separator } from "@/components/ui/Separator"
import { Heading } from "@/components/layout/Heading"
import { PageContainer } from "@/components/layout/PageContainer"

interface PlannerCreatePageProps {
  // Add your prop types here
}

const PlannerCreatePage: FC<PlannerCreatePageProps> = ({}) => {
  return (
    <PageContainer>
      <div className="flex justify-start items-center space-x-4">
        <Icons.Notebook className="size-10" />
        <Heading
          title="Planner Creation"
          description="Get started making your new planner below"
        />
      </div>
      <Separator />
      {/* <PlannerForm /> */}
    </PageContainer>
  )
}

export default PlannerCreatePage
