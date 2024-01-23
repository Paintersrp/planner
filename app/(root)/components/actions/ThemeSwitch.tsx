import type { FC, ReactNode } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/Icons"
import { Text } from "@/components/ui/Text"
import { TooltipWrapper } from "@/components/ui/Tooltip"

export const THEMES_TYPE = {
  DARK: "dark",
  LIGHT: "light",
}

interface ThemeSwitchButtonProps {
  type: "DARK" | "LIGHT"
  tooltip: string
  className?: string
  children: ReactNode
}

const ThemeSwitchButton: FC<ThemeSwitchButtonProps> = ({
  type,
  tooltip,
  className,
  children,
}) => {
  const { theme, setTheme } = useTheme()

  return (
    <TooltipWrapper content={<Text className="font-medium">{tooltip}</Text>}>
      <button
        className="text-primary relative z-10 flex size-10 items-center justify-center rounded-lg"
        onClick={() => setTheme(THEMES_TYPE[type])}
      >
        {theme === THEMES_TYPE[type] && (
          <motion.div
            className={cn(
              `bg-background absolute inset-0 rounded-lg m-[3px]`,
              className
            )}
            layoutId="selected-theme"
          />
        )}
        {children}
      </button>
    </TooltipWrapper>
  )
}

export const ThemeSwitch = () => {
  return (
    <div className="bg-muted flex items-center gap-x-1 rounded-lg">
      <ThemeSwitchButton
        type="LIGHT"
        tooltip="Light Theme"
        className="mix-blend-color-burn"
      >
        <Icons.Sun className="size-6" />
      </ThemeSwitchButton>

      <ThemeSwitchButton
        type="DARK"
        tooltip="Dark Theme"
        className="mix-blend-exclusion"
      >
        <Icons.Moon className="size-6" />
      </ThemeSwitchButton>
    </div>
  )
}
