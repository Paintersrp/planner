import { updateAccount } from "@/actions/mutations/account"
import { getProfile } from "@/actions/user"

import { Button } from "@/components/ui/Button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card"
import { Input } from "@/components/ui/Input"
import { Label } from "@/components/ui/Label"
import { Separator } from "@/components/ui/Separator"
import { Textarea } from "@/components/ui/Textarea"
import { Heading } from "@/components/layout/Heading"
import { PageContainer } from "@/components/layout/PageContainer"

const AccountPage = async () => {
  const user = await getProfile()

  return (
    <PageContainer>
      <section id="main-account" className="space-y-6">
        <Heading
          title="Account Settings"
          description="Update your account and profile settings here"
        />
        <Separator />

        <Card className="max-w-[800px] rounded-md">
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>
              Update profile and social information
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <Separator />

            <form action={updateAccount} className="flex flex-col gap-4">
              <div className="flex items-center">
                <Label htmlFor="username" className="w-[30%]">
                  User Name
                </Label>
                <Input
                  id="username"
                  type="text"
                  name="username"
                  value={user.username ?? ""}
                />
              </div>

              <div className="flex items-center">
                <Label htmlFor="fullName" className="w-[30%]">
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={user.full_name ?? ""}
                />
              </div>

              <div className="flex items-center">
                <Label htmlFor="biography" className="w-[30%]">
                  Biography
                </Label>
                <Textarea
                  id="biography"
                  name="biography"
                  value={user.biography ?? ""}
                />
              </div>

              <div className="flex justify-end items-center">
                <Button type="submit">Save</Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </PageContainer>
  )
}

export default AccountPage
