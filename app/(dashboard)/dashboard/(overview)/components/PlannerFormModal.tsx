"use client"

import { useState, type FC } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  addMonths,
  differenceInMonths,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDate,
  startOfMonth,
} from "date-fns"
import { useForm, type SubmitHandler } from "react-hook-form"
import { toast } from "sonner"

import { usePlannerModal } from "@/lib/stores/planner-modal"
import { useUserStore } from "@/lib/stores/user"
import useBrowserClient from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import { PlannerRequest, PlannerSchema } from "@/lib/validators/planner"
import { Form } from "@/components/ui/Form"
import { ResponsiveFormModal } from "@/components/composed/ResponsiveModal"

import { PlannerFormFields } from "./PlannerFormFields"

interface PlannerFormModalProps {
  // Add your prop types here
}

type PlannerDayFormatResult = {
  day_id: number
  name: string
}

type PlannerMonthFormatResult = {
  month: string
  days: PlannerDayFormatResult[]
}

type PlannerYearFormatResult = {
  name: number
  months: PlannerMonthFormatResult[]
}

type PlannerDateFormatResult = {
  years: PlannerYearFormatResult[]
}

const PlannerFormModal: FC<PlannerFormModalProps> = ({}) => {
  const supabase = useBrowserClient()
  const { user } = useUserStore()

  const { open, setOpen } = usePlannerModal()
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<PlannerRequest>({
    resolver: zodResolver(PlannerSchema),
    defaultValues: {
      name: "",
    },
  })

  const createPlanner = async (
    formData: PlannerRequest
  ): Promise<PlannerDateFormatResult> => {
    try {
      const { dateRange } = formData

      const endDate = dateRange.to
      const monthsInRange = differenceInMonths(endDate, dateRange.from) + 1

      const result: PlannerDateFormatResult = {
        years: [],
      }

      let currentDate = dateRange.from

      for (let i = 0; i < monthsInRange; i++) {
        const monthName = format(currentDate, "MMMM")
        const year = currentDate.getFullYear()

        if (i === 0 || !result.years.some((y) => y.name === year)) {
          result.years.push({ name: year, months: [] })
        }

        const startOfMonthDate = startOfMonth(currentDate)
        const endOfMonthDate = endOfMonth(currentDate)

        const daysInMonth = eachDayOfInterval({
          start:
            startOfMonthDate > dateRange.from
              ? startOfMonthDate
              : dateRange.from,
          end: endOfMonthDate < dateRange.to ? endOfMonthDate : dateRange.to,
        })

        const formattedDays: PlannerDayFormatResult[] = daysInMonth.map(
          (day) => ({
            day_id: getDate(day),
            name: format(day, "EEEE"),
          })
        )

        const currentYearIndex = result.years.findIndex((y) => y.name === year)

        result.years[currentYearIndex].months.push({
          month: monthName,
          days: formattedDays,
        })

        currentDate = addMonths(currentDate, 1)
      }

      return result
    } catch (error) {
      console.error("[CREATE_PLANNER]", error)
      throw new Error("Internal error")
    }
  }

  const onSubmit: SubmitHandler<PlannerRequest> = async (data) => {
    setIsLoading(true)

    try {
      // Mutation / Server Action
      
      // console.log(data)
      // const newPlanner = await createPlanner(data)
      // console.log(newPlanner)

      toast.success("Planner created", {
        description: `Your new planner has been successfully created.`,
      })
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ResponsiveFormModal
      open={open}
      setOpen={setOpen}
      title="Planner"
      description="Create new planner"
      onSubmit={form.handleSubmit(onSubmit)}
      errors={Object.keys(form.formState.errors).length > 0}
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "flex flex-col w-full justify-center gap-2 text-foreground space-y-2"
          )}
        >
          <PlannerFormFields form={form} isLoading={isLoading} />
        </form>
      </Form>
    </ResponsiveFormModal>
  )
}

export { PlannerFormModal }
