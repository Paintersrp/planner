import type { FC } from "react"

import { DevCode } from "@/components/ui/DevCode"
import { PageContainer } from "@/components/layout/PageContainer"

interface MonthpageProps {
  params: MonthParams
}

const Monthpage: FC<MonthpageProps> = ({ params }) => {
  return (
    <PageContainer>
      <DevCode data={params} />
    </PageContainer>
  )
}

export default Monthpage
