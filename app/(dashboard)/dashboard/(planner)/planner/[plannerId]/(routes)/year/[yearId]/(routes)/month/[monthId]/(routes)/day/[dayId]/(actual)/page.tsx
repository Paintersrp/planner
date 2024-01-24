import type { FC } from "react"

import { DevCode } from "@/components/ui/DevCode"
import { PageContainer } from "@/components/layout/PageContainer"

interface DayPageProps {
  params: {
    plannerId: string
    yearId: string
    monthId: string
    dayId: string
  }
}

const DayPage: FC<DayPageProps> = ({ params }) => {
  console.log(params)

  return (
    <PageContainer>
      <DevCode data={params} />
    </PageContainer>
  )
}

export default DayPage
