"use client"

import type { FC } from "react"

import { siteConfig } from "@/config/site"
import { Icons } from "@/components/ui/Icons"
import { Separator } from "@/components/ui/Separator"
import { Sidebar } from "@/components/composed/Sidebar"
import { SidebarFooter } from "@/components/composed/SidebarFooter"
import { SidebarHeader } from "@/components/composed/SidebarHeader"
import { SidebarNavigation } from "@/components/composed/SidebarNavigation"

const RootSidebar: FC = () => {
  return (
    <Sidebar>
      <div className="space-y-4">
        <SidebarHeader
          heading={siteConfig.name}
          icon={<Icons.Notebook className="mr-2 size-5" />}
        />

        <Separator className="opacity-[65%]" />

        <SidebarNavigation
          main={siteConfig.root.mainNav}
          secondary={siteConfig.root.sidebarNav}
        />
      </div>

      <SidebarFooter />
    </Sidebar>
  )
}

export { RootSidebar }
