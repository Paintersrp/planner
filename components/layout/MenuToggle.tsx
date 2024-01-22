import type { FC } from "react"

import { useAuthModal } from "@/hooks/auth/useAuthModal"
import { Button } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import { TooltipWrapper } from "@/components/ui/Tooltip"

const MenuToggle: FC = () => {
  const { setView, onOpen } = useAuthModal()

  return (
    <TooltipWrapper content="Login">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => {
          setView("sign-in")
          onOpen()
        }}
      >
        <Icons.Login className="h-[1.35rem] w-[1.35rem]" />
      </Button>
    </TooltipWrapper>
  )
}

export { MenuToggle }
