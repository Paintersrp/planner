import type { FC } from "react"

import { Icons } from "@/components/ui/Icons"
import { useAuthModal } from "@/components/auth/hooks/useAuthModal"
import { IconTooltipButton } from "@/components/composed/IconTooltipButton"

const AuthToggle: FC = () => {
  const { setView, onOpen } = useAuthModal()

  const onClick = () => {
    setView("sign-in")
    onOpen()
  }

  return (
    <IconTooltipButton tooltip="Login" onClick={onClick}>
      <Icons.Login className="size-6" />
    </IconTooltipButton>
  )
}

export { AuthToggle }
