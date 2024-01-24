"use server"

import { notFound } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"

const getUserData = async () => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    // Fetch records for the specified table
    const { data: records, error } = await supabase
      .from("profiles")
      .select("*, planners (*, years (*, months (*, days (*))))")
      .eq("id", data.user.id)
      .order("id", { ascending: true })
      .single()

    if (error) throw error

    if (!records) {
      throw new Error("Internal error")
    }

    return records
  } catch (error) {
    console.error(`[MONTHS_GET_ALL]`, error)

    throw new Error("Internal error")
  }
}

export { getUserData }
