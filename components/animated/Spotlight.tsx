"use client"

import * as React from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@/lib/utils"

export type SpotlightProps = React.HTMLAttributes<HTMLDivElement> & {
  shadows?: boolean
}

const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(
  ({ className, shadows = false, children, ...props }, ref) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = ({
      currentTarget,
      clientX,
      clientY,
    }: React.MouseEvent) => {
      const { left, top } = currentTarget.getBoundingClientRect()

      mouseX.set(clientX - left)
      mouseY.set(clientY - top)
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-background text-foreground group relative rounded-lg border-2 backdrop-blur-[2px]",
          {
            "shadow-[0_0_0_4px_theme(colors.gray.100/70%),0_0_0_1px_theme(colors.gray.100/70%),0_0_0_0.5px_theme(colors.color1.DEFAULT/100%)]":
              shadows,
            "dark:shadow-[0]": shadows,
          },
          className
        )}
        onMouseMove={handleMouseMove}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute inset-[0px] rounded-lg opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              hsl(var(--primary) / 8%),
              transparent 80%
            )
          `,
          }}
        />

        {children}
      </div>
    )
  }
)

Spotlight.displayName = "Spotlight"

export { Spotlight }
