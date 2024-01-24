import { getUserData } from "@/actions/user"
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default async function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery({
    queryKey: ["user-data"],
    queryFn: getUserData,
  })

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  )
}
