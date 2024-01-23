import "@/styles/globals.css"
import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { fontSans } from "@/lib/fonts"
import { getServerClient } from "@/lib/supabase/hook"
import { cn } from "@/lib/utils"
import { Toaster } from "@/components/ui/Sonner"
import { Providers } from "@/components/layout/Providers"

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const supabase = getServerClient()
  const { data } = await supabase.auth.getUser()

  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Providers
            user={data.user}
            attribute="class"
            defaultTheme="dark"
            enableSystem
          >
            <Toaster />
            <div className="relative flex min-h-screen flex-col">
              {children}
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
