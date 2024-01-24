import type { SupabaseClient } from "@supabase/supabase-js"

import { Database } from "@/types/supabase"

export interface MTMConfig {
  mtmTableName: string
  mtmField: string
}

export type TypedSupabaseClient = SupabaseClient<Database>
