import type { FC, ReactNode } from "react"

import { useSidebar } from "@/lib/stores/sidebar"
import { SidebarItem } from "@/components/composed/SidebarItem"

interface SidebarHeaderProps {
  icon?: ReactNode
  heading: string
}

const SidebarHeader: FC<SidebarHeaderProps> = ({ icon, heading }) => {
  const { setOpen } = useSidebar()

  return (
    <SidebarItem href="/" className="flex items-center" onOpenChange={setOpen}>
      {icon && icon}
      <span className="font-bold text-lg">{heading}</span>
    </SidebarItem>
  )
}

export { SidebarHeader }

{
  /* <SidebarItem href="/" className="flex items-center" onOpenChange={setOpen}>
<Icons.Notebook className="mr-2 size-5" />
<span className="font-bold text-lg">{siteConfig.name}</span>
</SidebarItem> */
}
