"use client"

import type { FC } from "react"
import { ThemeProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

import { TooltipProvider } from "@/components/ui/Tooltip"
import { AuthModal } from "@/components/auth/AuthModal"

const Providers: FC<ThemeProviderProps> = ({ children, ...props }) => {
  return (
    <ThemeProvider {...props}>
      <TooltipProvider delayDuration={0} skipDelayDuration={500}>
        <AuthModal />
        {children}
      </TooltipProvider>
    </ThemeProvider>
  )
}

export { Providers }
