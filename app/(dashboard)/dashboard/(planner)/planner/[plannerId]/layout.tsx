import type { ReactNode } from "react"
import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import { usePlannerPrefetch } from "@/lib/queries/planner"
import { Footer } from "@/components/layout/Footer"

import { PlannerHeader } from "./components/PlannerHeader"

interface PlannerLayoutProps {
  params: PlannerParams
  children: ReactNode
}

export default async function PlannerLayout({
  params,
  children,
}: PlannerLayoutProps) {
  const queryClient = await usePlannerPrefetch(params.plannerId)

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PlannerHeader />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </HydrationBoundary>
  )
}
