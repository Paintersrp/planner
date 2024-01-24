import { useMemo } from "react"
import { createBrowserClient } from "@supabase/ssr"

import { Database } from "@/types/supabase"

import { TypedSupabaseClient } from "./types"

let client: TypedSupabaseClient | undefined

export const getSupabaseBrowserClient = () => {
  if (client) {
    return client
  }

  client = createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )

  return client
}

function useBrowserClient() {
  return useMemo(getSupabaseBrowserClient, [])
}

export default useBrowserClient
