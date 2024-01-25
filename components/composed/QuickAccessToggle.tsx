"use client"

import { useCallback, useEffect, type FC } from "react"

import { useQuickAccess } from "@/lib/stores/quick-access"
import { Icons } from "@/components/ui/Icons"
import { Text } from "@/components/ui/Text"
import { IconTooltipButton } from "@/components/composed/IconTooltipButton"

const QuickAccessToggle: FC = () => {
  const { open, setOpen } = useQuickAccess()

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.ctrlKey && event.key === "q") {
        event.preventDefault()
        setOpen(!open)
      }
    },
    [open, setOpen]
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [handleKeyDown])

  return (
    <IconTooltipButton
      tooltip={
        <div className="space-y-1">
          <Text className="font-medium">Open quick access</Text>
          <Text variant="muted" size="sm">
            <kbd className="rounded-md border bg-accent px-1 py-0.5 text-sm font-bold">
              CTRL-Q
            </kbd>
            {"  "} to open with shortcut
          </Text>
        </div>
      }
      onClick={() => setOpen(true)}
    >
      <Icons.TerminalSquare className="size-6" />
      <span className="sr-only">Toggle command menu</span>
    </IconTooltipButton>
  )
}

export { QuickAccessToggle }
