"use client"

import type { FC } from "react"
import { Calculator, Calendar, Smile } from "lucide-react"

import { useQuickAccess } from "@/lib/stores/quick-access"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/Command"
import { ScrollArea } from "@/components/ui/ScrollArea"

interface QuickAccessProps {
  //
}

const QuickAccess: FC<QuickAccessProps> = () => {
  const { open, setOpen } = useQuickAccess()

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      {/* <CommandInput placeholder="Type a command or search..." /> */}
      <ScrollArea className="max-h-[100px]">
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>

          <CommandGroup heading="Suggestions">
            <CommandItem>
              <Calendar className="mr-2 size-4" />
              <span>Calendar</span>
            </CommandItem>

            <CommandItem>
              <Smile className="mr-2 size-4" />
              <span>Search Emoji</span>
            </CommandItem>

            <CommandItem>
              <Calculator className="mr-2 size-4" />
              <span>Calculator</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </ScrollArea>
    </CommandDialog>
  )
}

export { QuickAccess }
