import { siteConfig } from "@/config/site"
import { Icons } from "@/components/ui/Icons"
import { Header } from "@/components/composed/Header"
import { HeaderNav } from "@/components/composed/HeaderNav"
import { HeaderTitle } from "@/components/composed/HeaderTitle"
import { ThemeSwitch } from "@/components/layout/ThemeSwitch"

import { RootSidebar } from "./RootSidebar"

const RootHeader = () => {
  return (
    <Header
      actions={
        <div className="sm:flex hidden items-center">
          <ThemeSwitch layoutId="selected-theme-header" />
        </div>
      }
    >
      <div className="flex items-center space-x-4">
        <RootSidebar />

        <HeaderTitle
          heading="Planner"
          icon={<Icons.Notebook className="size-6" />}
        />
        <HeaderNav navItems={siteConfig.root.mainNav} />
      </div>
    </Header>
  )
}

export { RootHeader }
