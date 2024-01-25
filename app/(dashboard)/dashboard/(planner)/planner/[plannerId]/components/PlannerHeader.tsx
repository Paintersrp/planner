"use client"

import { notFound, useParams } from "next/navigation"

import { siteConfig } from "@/config/site"
import { usePlannerQuery } from "@/lib/queries/planner"
import { Header } from "@/components/composed/Header"
import { HeaderNav } from "@/components/composed/HeaderNav"
import { HeaderTitle } from "@/components/composed/HeaderTitle"
import { ThemeSwitch } from "@/components/layout/ThemeSwitch"

import { PlannerSidebar } from "./PlannerSidebar"

const PlannerHeader = () => {
  const { plannerId } = useParams<PlannerParams>()
  const { data } = usePlannerQuery(plannerId)

  if (!data) return notFound()

  return (
    <Header
      actions={
        <div className="sm:flex hidden items-center">
          <ThemeSwitch layoutId="selected-theme-header" />
        </div>
      }
    >
      <div className="flex items-center space-x-4">
        <PlannerSidebar />

        {/* todo add planner icon selection */}
        <HeaderTitle heading={data.name} />

        {/* todo build navItems from data fetch */}
        <HeaderNav navItems={siteConfig.planner.mainNav} />
      </div>
    </Header>
  )
}

export { PlannerHeader }
