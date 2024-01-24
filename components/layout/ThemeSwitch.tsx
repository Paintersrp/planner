"use client"

import type { FC, ReactNode } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/ui/Icons"
import { Text } from "@/components/ui/Text"
import { TooltipWrapper } from "@/components/ui/Tooltip"

type ThemeType = "dark" | "light"

interface ThemeSwitchButtonProps {
  type: ThemeType
  tooltip: string
  className?: string
  children: ReactNode
  layoutId: string
}

const ThemeSwitchButton: FC<ThemeSwitchButtonProps> = ({
  type,
  tooltip,
  className,
  children,
  layoutId,
}) => {
  const { theme, setTheme } = useTheme()

  return (
    <TooltipWrapper content={<Text className="font-medium">{tooltip}</Text>}>
      <button
        className="text-primary relative z-10 flex size-10 items-center justify-center rounded-lg"
        onClick={() => setTheme(type)}
      >
        {theme === type && (
          <motion.div
            className={cn(
              `bg-background absolute inset-0 rounded-lg m-[3px]`,
              className
            )}
            layoutId={layoutId}
          />
        )}
        {children}
      </button>
    </TooltipWrapper>
  )
}

interface ThemeSwitchProps {
  layoutId: string
}

export const ThemeSwitch = ({
  layoutId = "selected-theme",
}: ThemeSwitchProps) => {
  return (
    <div className="bg-muted flex items-center max-w-[73.5px] gap-x-1 rounded-lg">
      <ThemeSwitchButton
        type="light"
        tooltip="Light Theme"
        className="mix-blend-color-burn"
        layoutId={layoutId}
      >
        <Icons.Sun className="size-6" />
      </ThemeSwitchButton>

      <ThemeSwitchButton
        type="dark"
        tooltip="Dark Theme"
        className="mix-blend-exclusion"
        layoutId={layoutId}
      >
        <Icons.Moon className="size-6" />
      </ThemeSwitchButton>
    </div>
  )
}
