import Link from "next/link"
import { redirect } from "next/navigation"

import { getServerClient } from "@/lib/supabase/server"
import { buttonVariants } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Icons } from "@/components/ui/Icons"
import { Text } from "@/components/ui/Text"
import { ForgotForm } from "@/components/auth/ForgotForm"

const Page = async () => {
  const sb = getServerClient()
  const { data } = await sb.auth.getUser()

  if (data.user) {
    redirect("/")
  }

  return (
    <Card className="mt-4">
      <CardHeader className="p-4">
        <CardTitle>
          <Icons.Logo className="mx-auto h-8 w-8 mb-3" />
          <Text type="h3" className="text-center">
            Forgot Password
          </Text>
        </CardTitle>
      </CardHeader>

      <CardContent className="min-w-[400px] p-2">
        <ForgotForm />
      </CardContent>
      <CardFooter>
        <div className="flex w-full justify-center flex-col space-y-1">
          <Link
            href="/sign-in"
            className={buttonVariants({
              variant: "link",
              size: "xs",
              className: "p-0 text-slate-200 hover:text-blue-300",
            })}
          >
            Return to Sign in
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

export default Page
