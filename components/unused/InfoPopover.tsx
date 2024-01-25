import type { FC, ReactNode } from "react"

import { Icons } from "@/components/ui/Icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

interface InfoPopoverProps {
  children: ReactNode
}

const InfoPopover: FC<InfoPopoverProps> = ({ children }) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Icons.Info className="size-6 dark:text-blue-300 text-blue-500 cursor-pointer" />
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <p className="text-sm">{children}</p>
      </PopoverContent>
    </Popover>
  )
}

export { InfoPopover }
