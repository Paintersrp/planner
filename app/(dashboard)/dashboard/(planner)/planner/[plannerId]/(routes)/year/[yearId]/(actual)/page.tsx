import type { FC } from "react"

import { DevCode } from "@/components/ui/DevCode"
import { PageContainer } from "@/components/layout/PageContainer"

interface YearPageProps {
  params: YearParams
}

const YearPage: FC<YearPageProps> = ({ params }) => {
  return (
    <PageContainer>
      <DevCode data={params} />
    </PageContainer>
  )
}

export default YearPage
