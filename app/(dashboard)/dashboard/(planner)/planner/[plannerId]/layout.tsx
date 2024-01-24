import { getPlanner } from "@/actions/planners"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

import { Footer } from "@/components/layout/Footer"

import { PlannerHeader } from "./components/PlannerHeader"

interface PlannerLayoutProps {
  params: { plannerId: string }
  children: React.ReactNode
}

export default async function PlannerLayout({
  params,
  children,
}: PlannerLayoutProps) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["planner"],
    queryFn: async () => getPlanner(params.plannerId),
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PlannerHeader />
      <div className="flex-1 h-full">{children}</div>
      <Footer />
    </HydrationBoundary>
  )
}
