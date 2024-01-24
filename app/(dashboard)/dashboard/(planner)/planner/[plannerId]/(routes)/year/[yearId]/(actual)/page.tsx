import type { FC } from "react"

import { PageContainer } from "@/components/layout/PageContainer"

interface YearPageProps {
  params: {
    yearId: string
    plannerId: string
  }
}

const YearPage: FC<YearPageProps> = ({ params }) => {
  console.log(params)

  return <PageContainer>ReplaceMe</PageContainer>
}

export default YearPage
