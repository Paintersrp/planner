"use client"

import { useState } from "react"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/Drawer"
import { Icons } from "@/components/ui/Icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

type MonthOption = {
  value: string
  label: string
}

const months: MonthOption[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
].map((month, index) => ({ value: `${index + 1}`, label: month }))

export function MonthChanger() {
  const [open, setOpen] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState<MonthOption | null>(null)
  const [selectedYear, setSelectedYear] = useState<number>(
    new Date().getFullYear()
  )

  const isDesktop = useMediaQuery("(min-width: 768px)")

  const incrementYear = () => {
    setSelectedYear(selectedYear + 1)
  }

  const decrementYear = () => {
    setSelectedYear(selectedYear - 1)
  }

  const handleClose = () => {
    setOpen(false)
  }

  if (isDesktop) {
    return (
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-[150px] justify-start">
            {selectedMonth
              ? `${selectedMonth.label} ${selectedYear}`
              : "+ Select date"}
          </Button>
        </PopoverTrigger>

        <PopoverContent align="center" className="w-[250px] p-0">
          <div className="flex justify-between items-center p-2 border-b">
            <Button variant="ghost" size="iconSm" onClick={decrementYear}>
              <Icons.ChevronLeft className="size-6" />
            </Button>
            <div className="font-semibold text-xl">{selectedYear}</div>
            <Button variant="ghost" size="iconSm" onClick={incrementYear}>
              <Icons.ChevronRight className="size-6" />
            </Button>
          </div>

          <MonthList
            months={months}
            setSelectedMonth={setSelectedMonth}
            handleClose={handleClose}
          />
        </PopoverContent>
      </Popover>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline" className="w-[150px] justify-start">
          {selectedMonth
            ? `${selectedMonth.label} ${selectedYear}`
            : "+ Select date"}
        </Button>
      </DrawerTrigger>

      <DrawerContent>
        <div className="py-4 gap-8 flex justify-center items-center">
          <Button variant="ghost" size="iconSm" onClick={decrementYear}>
            <Icons.ChevronLeft className="size-6" />
          </Button>
          <div className="font-semibold text-xl">{selectedYear}</div>
          <Button variant="ghost" size="iconSm" onClick={incrementYear}>
            <Icons.ChevronRight className="size-6" />
          </Button>
        </div>

        <MonthList
          months={months}
          setSelectedMonth={setSelectedMonth}
          handleClose={handleClose}
        />
      </DrawerContent>
    </Drawer>
  )
}

function MonthList({
  months,
  setSelectedMonth,
  handleClose,
}: {
  months: MonthOption[]
  setSelectedMonth: (month: MonthOption | null) => void
  handleClose: () => void
}) {
  return (
    <Command>
      <CommandList className="max-h-[400px]">
        <CommandGroup>
          {months.map((month) => (
            <CommandItem
              key={month.value}
              value={month.value}
              onSelect={() => {
                setSelectedMonth(month)
              }}
            >
              {month.label}
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>

      <div className="p-1 flex justify-center w-full border-t">
        <Button
          variant="ghost"
          size="iconWithText"
          className="flex w-full items-center justify-center text-base"
          onClick={handleClose}
        >
          <Icons.Check className="size-5 mr-2" />
          Update
        </Button>
      </div>
    </Command>
  )
}
