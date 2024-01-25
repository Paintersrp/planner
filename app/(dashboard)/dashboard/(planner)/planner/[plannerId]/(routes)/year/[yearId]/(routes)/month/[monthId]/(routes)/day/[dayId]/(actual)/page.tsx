import type { FC } from "react"

import { DevCode } from "@/components/ui/DevCode"
import { PageContainer } from "@/components/layout/PageContainer"

interface DayPageProps {
  params: DayParams
}

const DayPage: FC<DayPageProps> = ({ params }) => {
  return (
    <PageContainer>
      <DevCode data={params} />
    </PageContainer>
  )
}

export default DayPage
