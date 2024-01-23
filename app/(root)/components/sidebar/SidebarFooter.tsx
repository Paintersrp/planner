"use client"

import type { FC } from "react"

import { siteConfig } from "@/config/site"
import { useSidebar } from "@/lib/stores/sidebar"
import { useUserStore } from "@/lib/stores/user"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import { Separator } from "@/components/ui/Separator"
import { SheetFooter } from "@/components/ui/Sheet"
import { useAuth } from "@/components/auth/hooks/useAuth"
import { useAuthModal } from "@/components/auth/hooks/useAuthModal"

import { SidebarItem } from "./SidebarItem"

const SidebarFooter: FC = () => {
  const { signOut } = useAuth()
  const { setView, onOpen } = useAuthModal()
  const { setOpen } = useSidebar()
  const { user } = useUserStore()

  return (
    <SheetFooter className="flex-col space-y-4">
      {user ? (
        <Button
          onClick={() => {
            signOut()
            setOpen(false)
          }}
          className="flex items-center"
          variant="accent"
        >
          <Icons.LogOut className="mr-2 size-5" />
          Logout
        </Button>
      ) : (
        <div className="flex flex-col space-y-3">
          <Button
            onClick={() => {
              setView("sign-in")
              setOpen(false)
              onOpen()
            }}
            className="flex items-center"
            variant="outline"
          >
            <Icons.Login className="mr-2 size-5" />
            Login
          </Button>

          <Button
            onClick={() => {
              setView("sign-up")
              setOpen(false)
              onOpen()
            }}
            className="flex items-center"
            variant="accent"
          >
            <Icons.Register className="mr-2 size-5" />
            Register
          </Button>
        </div>
      )}

      <Separator className="opacity-[65%]" />

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-2 text-muted-foreground">
          {siteConfig.footerNav?.map(
            (item) =>
              item.href && (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  icon={item.icon}
                  className="flex items-center font-medium text-xs"
                >
                  {item.title}
                </SidebarItem>
              )
          )}
        </div>

        <div className="flex space-x-2 items-center text-muted-foreground ">
          <Icons.Copyright className="size-4" />

          <div className="flex flex-col text-xs">
            <p>2024 - {siteConfig.name}</p>
            <p>{siteConfig.author}</p>
          </div>
        </div>
      </div>
    </SheetFooter>
  )
}

export { SidebarFooter }
