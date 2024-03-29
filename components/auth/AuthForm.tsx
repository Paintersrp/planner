import type { FC } from "react"
import type { UseFormReturn } from "react-hook-form"

import { AuthRequest } from "@/lib/validators/auth"
import { Button } from "@/components/ui/Button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form"
import { Input } from "@/components/ui/Input"

interface AuthFormProps {
  onSubmit: () => void
  form: UseFormReturn<AuthRequest, any, undefined>
  buttonText: string
  isLoading: boolean
}

const AuthForm: FC<AuthFormProps> = ({
  onSubmit,
  form,
  buttonText,
  isLoading,
}) => {
  return (
    <Form {...form}>
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full justify-center gap-2 text-foreground space-y-2 px-6 pb-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  disabled={isLoading}
                  placeholder="Email address"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  disabled={isLoading}
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          isLoading={isLoading}
          disabled={isLoading}
          type="submit"
          variant="success"
        >
          {buttonText}
        </Button>
      </form>
    </Form>
  )
}

export { AuthForm }
