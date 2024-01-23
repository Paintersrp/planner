import type { FC, ReactNode } from "react"
import Link, { type LinkProps } from "next/link"
import { useRouter } from "next/navigation"

import { cn } from "@/lib/utils"

interface SidebarItemProps extends LinkProps {
  onOpenChange?: (open: boolean) => void
  children: ReactNode
  className?: string
  icon?: JSX.Element
}

const SidebarItem: FC<SidebarItemProps> = ({
  href,
  onOpenChange,
  className,
  children,
  icon,
  ...props
}) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString())
        onOpenChange?.(false)
      }}
      className={cn("flex", className)}
      {...props}
    >
      {icon && icon}
      {children}
    </Link>
  )
}

export { SidebarItem }
