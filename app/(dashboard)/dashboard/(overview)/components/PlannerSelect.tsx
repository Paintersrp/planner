"use client"

import { useState, type FC } from "react"
import { useRouter } from "next/navigation"
import { getUserData } from "@/actions/user"
import { useQuery } from "@tanstack/react-query"

import { usePlannerModal } from "@/lib/stores/planner-modal"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/Button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/Command"
import { Icons } from "@/components/ui/Icons"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/Popover"

import { PlannerFormModal } from "./PlannerFormModal"

interface PlannerSelectProps {
  // Add your prop types here
}

const PlannerSelect: FC<PlannerSelectProps> = () => {
  const { setOpen: setModalOpen } = usePlannerModal()
  const [open, setOpen] = useState<boolean>(false)
  const router = useRouter()

  const { data } = useQuery({
    queryKey: ["user-data"],
    queryFn: () => getUserData(),
  })

  const formattedItems = data!.planners.map((item) => ({
    id: item.id,
    name: item.name,
  }))

  const onPlannerSelect = (planner: { id: number; name: string | null }) => {
    setOpen(false)
    router.push(`/dashboard/planner/${planner.id}`)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          role="combobox"
          aria-expanded={open}
          aria-label="Select a store"
          className="w-[200px] justify-between"
        >
          <Icons.ShoppingBag className="mr-2 h-4 w-4" />
          Select a Planner
          <Icons.ChevronsUpDown className="ml-auto h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandList>
            <CommandInput placeholder="Search planners..."></CommandInput>
            <CommandEmpty>No planner found.</CommandEmpty>
            <CommandGroup heading="Planners">
              {formattedItems.map((shop) => (
                <CommandItem
                  className=""
                  key={shop.id}
                  onSelect={() => onPlannerSelect(shop)}
                >
                  <Icons.Notebook className="mr-2 h-4 w-4" />
                  {shop.name}
                  {/* <Icons.Check className={cn("ml-auto h-4 w-4")} /> */}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
          <CommandSeparator />
          <CommandList>
            <CommandGroup>
              <CommandItem
                onSelect={() => {
                  setOpen(false)
                  setModalOpen(true)
                }}
              >
                <Icons.PlusCircle className="mr-2 h-5 w-5" />
                Create Planner
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export { PlannerSelect }
