import { Spotlight } from "@/components/animated/Spotlight"

import { Actions } from "./Actions"
import { MonthChanger } from "./MonthChanger"
import { Navbar } from "./Navbar"
import { Sidebar } from "./Sidebar"

const Header = async () => {
  return (
    <header className="bg-background sticky top-0 w-full border-b">
      <Spotlight shadows={false} className="border-0 w-full">
        <div className="px-4 sm:container flex h-14 sm:h-16 items-center sm:justify-between gap-2">
          <div className="flex items-center">
            <div className="hidden sm:flex">
              <Navbar />
            </div>

            <div className="flex sm:hidden">
              <Sidebar />
            </div>
          </div>

          <MonthChanger />

          <Actions />
        </div>
      </Spotlight>
    </header>
  )
}

export { Header }
