"use server"

import { revalidatePath } from "next/cache"
import { notFound } from "next/navigation"
import { z } from "zod"

import { getServerClient } from "@/lib/supabase/server"

const schema = z.object({
  username: z.string({ invalid_type_error: "Invalid Username" }),
  full_name: z.string({ invalid_type_error: "Invalid Name" }),
  biography: z.string({ invalid_type_error: "Invalid Biography" }),
})

export const updateAccount = async (formData: FormData) => {
  const supabase = getServerClient()
  const { data } = await supabase.auth.getUser()

  if (!data.user) notFound()

  const validatedFields = schema.safeParse({
    username: formData.get("username"),
    full_name: formData.get("fullName"),
    biography: formData.get("biography"),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { error } = await supabase
    .from("profiles")
    .update(validatedFields.data)
    .eq("id", data.user.id)
    .select()
    .order("id", { ascending: true })
    .single()

  if (error) throw error

  revalidatePath("/dashboard/account")
}
