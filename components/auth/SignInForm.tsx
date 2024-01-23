"use client"

import { type FC } from "react"

import { useAuth } from "@/components/auth/hooks/useAuth"

import { AuthForm } from "./AuthForm"

const SignInForm: FC = () => {
  const { form, signIn, isLoading } = useAuth()

  return (
    <AuthForm
      onSubmit={form.handleSubmit(signIn)}
      form={form}
      buttonText="Sign In"
      isLoading={isLoading}
    />
  )
}

export { SignInForm }
