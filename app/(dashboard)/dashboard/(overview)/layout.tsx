import { Footer } from "@/components/layout/Footer"

import { OverviewHeader } from "./components/OverviewHeader"

interface OverviewLayoutProps {
  children: React.ReactNode
}

export default async function OverviewLayout({
  children,
}: OverviewLayoutProps) {
  return (
    <>
      <OverviewHeader />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </>
  )
}
