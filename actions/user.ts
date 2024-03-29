"use server"

import { notFound } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"

const getUserData = async () => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    // Fetch records for the specified table
    const { data: record, error } = await supabase
      .from("profiles")
      .select("*, planners (*, years (*, months (*, days (*))))")
      .eq("id", data.user.id)
      .order("id", { ascending: true })
      .single()

    if (error) throw error

    if (!record) {
      throw new Error("Record not found")
    }

    return record
  } catch (error) {
    console.error(`[USER_DATA]`, error)

    throw new Error("Internal error")
  }
}

const getProfile = async () => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    // Fetch records for the specified table
    const { data: record, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", data.user.id)
      .order("id", { ascending: true })
      .single()

    if (error) throw error

    if (!record) {
      throw new Error("Record not found")
    }

    return record
  } catch (error) {
    console.error(`[PROFILE]`, error)

    throw new Error("Internal error")
  }
}

export { getProfile, getUserData }
