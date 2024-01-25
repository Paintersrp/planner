import { z } from "zod"

export const PlannerSchema = z.object({
  name: z.string().min(1),
  dateRange: z.object({
    from: z.date({
      required_error: "A start date is required.",
    }),
    to: z.date({
      required_error: "An end date is required.",
    }),
  }),
})

export type PlannerRequest = z.infer<typeof PlannerSchema>
