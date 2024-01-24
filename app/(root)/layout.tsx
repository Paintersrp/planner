import { Footer } from "@/components/layout/Footer"

import { RootHeader } from "./components/RootHeader"

interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <RootHeader />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </>
  )
}
