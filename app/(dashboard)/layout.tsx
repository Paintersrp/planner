import { HydrationBoundary, dehydrate } from "@tanstack/react-query"

import { useUserPrefetch } from "@/lib/queries/user"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const queryClient = await useUserPrefetch()

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
