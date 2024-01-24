import type { FC, ReactNode } from "react"

import { Icons } from "@/components/ui/Icons"

interface HeaderTitleProps {
  icon?: ReactNode
  heading: string
}

const HeaderTitle: FC<HeaderTitleProps> = ({ icon, heading }) => {
  return (
    <div className="hidden sm:flex items-center space-x-2">
      {icon && icon}
      <span className="text-xl font-semibold">{heading}</span>
    </div>
  )
}

export { HeaderTitle }
