import type { FC } from "react"

import { DevCode } from "@/components/ui/DevCode"
import { PageContainer } from "@/components/layout/PageContainer"

interface MonthpageProps {
  params: {
    plannerId: string
    yearId: string
    monthId: string
  }
}

const Monthpage: FC<MonthpageProps> = ({ params }) => {
  console.log(params)

  return (
    <PageContainer>
      <DevCode data={params} />
    </PageContainer>
  )
}

export default Monthpage
