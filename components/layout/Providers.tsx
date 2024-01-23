"use client"

import { useEffect, useState, type FC } from "react"
import type { User } from "@supabase/gotrue-js/src/lib/types"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ThemeProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes/dist/types"

import { useUserStore } from "@/lib/stores/user"
import { TooltipProvider } from "@/components/ui/Tooltip"
import { AuthModal } from "@/components/auth/AuthModal"

interface ProvidersProps extends ThemeProviderProps {
  user: User | null
}

const Providers: FC<ProvidersProps> = ({ user, children, ...props }) => {
  const { setUser } = useUserStore()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  )

  useEffect(() => {
    if (user) {
      setUser(user)
    }
  }, [user, setUser])

  return (
    <ThemeProvider {...props}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={0} skipDelayDuration={500}>
          <AuthModal />
          {children}
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export { Providers }
