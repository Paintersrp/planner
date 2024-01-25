"use client"

import { useState, type FC } from "react"
import { format } from "date-fns"
import type { SelectSingleEventHandler } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"
import { Icons } from "@/components/ui/Icons"

interface DatePickerProps {
  selected: Date
  onSelect: SelectSingleEventHandler
}

export const DatePicker: FC<DatePickerProps> = ({ selected, onSelect }) => {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <DropdownMenu open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[200px] justify-start text-left font-normal",
            !selected && "text-muted-foreground"
          )}
        >
          <Icons.Calendar className="mr-2 h-4 w-4" />
          {selected ? format(selected, "PPP") : <span>Pick a date</span>}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={selected}
          onSelect={onSelect}
          initialFocus
          onDayClick={() => {
            setOpen(false)
          }}
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
