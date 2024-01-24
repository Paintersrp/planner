"use client"

import type { FC, ReactNode } from "react"

import { useSidebar } from "@/lib/stores/sidebar"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/Sheet"

interface SidebarProps {
  children: ReactNode
}

const Sidebar: FC<SidebarProps> = ({ children }) => {
  const { open, setOpen } = useSidebar()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Icons.Menu className="size-6" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="flex flex-col justify-between">
        {children}
      </SheetContent>
    </Sheet>
  )
}

export { Sidebar }
