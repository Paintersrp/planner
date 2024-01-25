"use server"

import { notFound } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"

/**
 * Days - Get All Server Action
 */
export const getDays = async () => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    const { data: records, error } = await supabase
      .from("days")
      .select("*")
      .order("id", { ascending: true })

    if (error) throw error

    if (!records) {
      throw new Error("Records not found")
    }

    return records
  } catch (error) {
    console.error("[DAYS_GET_ALL]", error)

    throw new Error("Internal error")
  }
}

/**
 * Day - Get by ID Server Action
 */
export const getDay = async (id: string) => {
  try {
    const supabase = getServerClient()
    const { data } = await supabase.auth.getUser()

    if (!data.user) notFound()

    const { data: record, error } = await supabase
      .from("days")
      .select("*")
      .eq("id", id)
      .order("id", { ascending: true })
      .single()

    if (error) throw error

    if (!record) {
      throw new Error("Record not found")
    }

    return record
  } catch (error) {
    console.error("[DAY_GET]", error)

    throw new Error("Internal error")
  }
}
