import { siteConfig } from "@/config/site"
import { Header } from "@/components/composed/Header"
import { HeaderNav } from "@/components/composed/HeaderNav"
import { HeaderTitle } from "@/components/composed/HeaderTitle"
import { ThemeSwitch } from "@/components/layout/ThemeSwitch"

import { OverviewSidebar } from "./OverviewSidebar"
import { PlannerSelect } from "./PlannerSelect"

const OverviewHeader = () => {
  return (
    <Header
      actions={
        <div className="sm:flex hidden items-center">
          <ThemeSwitch layoutId="selected-theme-header" />
        </div>
      }
    >
      <div className="flex items-center space-x-4">
        <OverviewSidebar />

        <HeaderTitle heading="Overview" />
        <PlannerSelect />
        <HeaderNav navItems={siteConfig.overview.mainNav} />
      </div>
    </Header>
  )
}

export { OverviewHeader }
