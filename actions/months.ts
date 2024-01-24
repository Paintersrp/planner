"use server"

import { getServerClient } from "@/lib/supabase/server"

const addMonth = async (data: any) => {
  try {
    const supabase = getServerClient()

    const { data: record, error } = await supabase
      .from("months_duplicate")
      .insert(data)
      .select("*")
      .single()

    if (error) throw error

    if (!record) {
      throw new Error("Internal error")
    }

    return record
  } catch (error) {
    console.log(`[COUNTRIES_POST]`, error)

    throw new Error("Internal error")
  }
}

const getMonths = async () => {
  try {
    const supabase = getServerClient()

    // Fetch records for the specified table
    const { data: records, error } = await supabase
      .from("months_duplicate")
      .select("*")
      .order("id", { ascending: true })

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

const deleteMonth = async (id: string | number) => {
  try {
    const supabase = getServerClient()

    const { data: object, error } = await supabase
      .from("months_duplicate")
      .delete()
      .eq("id", id)
      .select()
      .single()

    if (error) throw error

    return object
  } catch (error) {
    console.log(`[MONTHS_DELETE]`, error)
    throw new Error("Internal error")
  }
}

export { addMonth, getMonths, deleteMonth }
