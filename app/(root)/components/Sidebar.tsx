"use client"

import type { FC } from "react"

import { useSidebar } from "@/lib/stores/sidebar"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import { Separator } from "@/components/ui/Separator"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"

import { SidebarFooter } from "./sidebar/SidebarFooter"
import { SidebarHeader } from "./sidebar/SidebarHeader"
import { SidebarNavigation } from "./sidebar/SidebarNavigation"

const Sidebar: FC = () => {
  const { open, setOpen } = useSidebar()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col justify-between">
        <div className="space-y-4">
          <SidebarHeader />

          <Separator className="opacity-[65%]" />

          <SidebarNavigation />
        </div>
        <SidebarFooter />
      </SheetContent>
    </Sheet>
  )
}

export { Sidebar }
