import type { FC } from "react"

import { Icons } from "@/components/ui/Icons"
import { IconTooltipButton } from "@/components/composed/TooltipButton"

const SettingsToggle: FC = () => {
  return (
    <IconTooltipButton tooltip="Settings" href="/settings">
      <Icons.Settings className="size-6" />
    </IconTooltipButton>
  )
}

export { SettingsToggle }
