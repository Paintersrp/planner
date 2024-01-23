import { ReactNode, forwardRef } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { Button, ButtonProps, buttonVariants } from "@/components/ui/Button"
import { Text } from "@/components/ui/Text"
import { TooltipWrapper } from "@/components/ui/Tooltip"

interface IconTooltipButtonProps extends ButtonProps {
  tooltip: string | ReactNode
  tooltipClass?: string
  href?: string
}

const IconTooltipButton = forwardRef<HTMLButtonElement, IconTooltipButtonProps>(
  (
    { className, href, tooltip, tooltipClass, children, onClick, ...props },
    ref
  ) => {
    const isTooltipString = typeof tooltip === "string"

    return (
      <TooltipWrapper
        content={
          isTooltipString ? (
            <Text className={cn("font-medium", tooltipClass)}>{tooltip}</Text>
          ) : (
            tooltip
          )
        }
      >
        {href ? (
          <Link
            href={href}
            className={buttonVariants({
              variant: "ghost",
              size: "icon",
              className,
            })}
          >
            {children}
          </Link>
        ) : (
          <Button
            variant="ghost"
            size="icon"
            onClick={onClick}
            ref={ref}
            className={className}
            {...props}
          >
            {children}
          </Button>
        )}
      </TooltipWrapper>
    )
  }
)

IconTooltipButton.displayName = "IconTooltipButton"

export { IconTooltipButton }
