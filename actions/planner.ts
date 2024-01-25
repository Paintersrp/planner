"use server"

import { notFound } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"

const getPlanner = async (id: string) => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    // Fetch records for the specified table
    const { data: records, error } = await supabase
      .from("planners")
      .select("*, years (*, months (*, days (*)))")
      .eq("id", id)
      .order("id", { ascending: true })
      .single()

    if (error) throw error

    if (!records) {
      throw new Error("Internal error")
    }

    return records
  } catch (error) {
    console.error(`[PLANNER_GET]`, error)

    throw new Error("Internal error")
  }
}

export { getPlanner }
