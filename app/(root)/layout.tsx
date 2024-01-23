import { Footer } from "./components/Footer"
import { Header } from "./components/Header"
import { QuickAccess } from "./components/QuickAccess"

interface LayoutProps {
  children: React.ReactNode
}

export default async function Layout({ children }: LayoutProps) {
  return (
    <>
      <QuickAccess />
      <Header />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </>
  )
}
