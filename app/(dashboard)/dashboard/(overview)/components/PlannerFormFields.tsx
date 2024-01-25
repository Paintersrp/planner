"use client"

import { Fragment, type FC } from "react"
import { UseFormReturn } from "react-hook-form"

import { PlannerRequest } from "@/lib/validators/planner"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"
import { DatePicker } from "@/components/composed/DatePicker"
import { RangePicker } from "@/components/composed/RangePicker"

interface PlannerFormProps {
  form: UseFormReturn<PlannerRequest, any, undefined>
  isLoading: boolean
}

const PlannerFormFields: FC<PlannerFormProps> = ({ form, isLoading }) => {
  return (
    <Fragment>
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                disabled={isLoading}
                placeholder="Planner Name"
                {...field}
              />
            </FormControl>

            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="dateRange"
        render={({ field }) => (
          <FormItem className="flex flex-col">
            <FormLabel>End Date</FormLabel>
            {/* <DatePicker selected={field.value} onSelect={field.onChange} /> */}
            <RangePicker selected={field.value} onSelect={field.onChange} />

            <FormDescription>
              End date determines which day the planner should end.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </Fragment>
  )
}

export { PlannerFormFields }
