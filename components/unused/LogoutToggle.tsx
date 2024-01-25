import type { FC } from "react"

import { Icons } from "@/components/ui/Icons"
import { useAuth } from "@/components/auth/hooks/useAuth"
import { IconTooltipButton } from "@/components/composed/IconTooltipButton"

const LogoutToggle: FC = () => {
  const { signOut } = useAuth()

  return (
    <IconTooltipButton tooltip="Logout" onClick={signOut}>
      <Icons.LogOut className="size-6" />
    </IconTooltipButton>
  )
}

export { LogoutToggle }
