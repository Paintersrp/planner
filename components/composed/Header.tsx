import type { FC, ReactNode } from "react"

import { Spotlight } from "@/components/animated/Spotlight"

interface HeaderProps {
  actions: ReactNode
  children: ReactNode
}

const Header: FC<HeaderProps> = ({ actions, children }) => {
  return (
    <header className="bg-background sticky top-0 w-full border-b">
      <Spotlight shadows={false} className="border-0 w-full">
        <div className="sm:container !px-4 flex h-14 sm:h-16 items-center sm:justify-between gap-2">
          <div>{children}</div>

          {actions && actions}
        </div>
      </Spotlight>
    </header>
  )
}

export { Header }
