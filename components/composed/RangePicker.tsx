"use client"

import { useState, type FC } from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { DateRange, SelectRangeEventHandler } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import { Calendar } from "@/components/ui/Calendar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu"

interface RangePickerProps {
  selected: DateRange
  onSelect: SelectRangeEventHandler
  className?: string
}

const RangePicker: FC<RangePickerProps> = ({
  selected,
  onSelect,
  className,
}) => {
  const [open, setOpen] = useState<boolean>(false)

  //   const [date, setDate] = useState<DateRange | undefined>({
  //     from: new Date(2022, 0, 20),
  //     to: addDays(new Date(2022, 0, 20), 20),
  //   })

  return (
    <div className={cn("grid gap-2", className)}>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            id="date"
            variant={"outline"}
            className={cn(
              "w-[300px] justify-start text-left font-normal",
              !selected && "text-muted-foreground"
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {selected?.from ? (
              selected.to ? (
                <>
                  {format(selected.from, "LLL dd, y")} -{" "}
                  {format(selected.to, "LLL dd, y")}
                </>
              ) : (
                format(selected.from, "LLL dd, y")
              )
            ) : (
              <span>Pick a date</span>
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-auto p-0" align="start">
          <Calendar
            initialFocus
            mode="range"
            defaultMonth={selected?.from}
            selected={selected}
            onSelect={onSelect}
            numberOfMonths={2}
          />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}

export { RangePicker }
