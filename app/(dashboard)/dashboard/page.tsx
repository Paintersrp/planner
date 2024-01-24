import { redirect } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"

const DashboardPage = async ({}) => {
  const supabase = getServerClient()
  const { data } = await supabase.auth.getUser()

  // todo redirect callback
  if (!data.user) redirect("/sign-in")
  if (data.user) redirect("/dashboard/planners")

  return <div>Dashboard Redirect</div>
}

export default DashboardPage
