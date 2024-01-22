import { HeaderActions } from "./HeaderActions"
import { Navbar } from "./Navbar"

const Header = async () => {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b dark:border-slate-700 border-slate-300">
      <div className="px-4 sm:container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <Navbar />
        <HeaderActions />
      </div>
    </header>
  )
}

export { Header }
