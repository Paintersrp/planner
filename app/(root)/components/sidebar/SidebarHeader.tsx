import type { FC } from "react"

import { siteConfig } from "@/config/site"
import { useSidebar } from "@/lib/stores/sidebar"
import { Icons } from "@/components/ui/Icons"

import { SidebarItem } from "./SidebarItem"

const SidebarHeader: FC = () => {
  const { setOpen } = useSidebar()
  
  return (
    <SidebarItem href="/" className="flex items-center" onOpenChange={setOpen}>
      <Icons.Notebook className="mr-2 size-5" />
      <span className="font-bold text-lg">{siteConfig.name}</span>
    </SidebarItem>
  )
}

export { SidebarHeader }
