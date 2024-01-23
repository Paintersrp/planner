"use client"

import { type FC } from "react"
import { motion } from "framer-motion"

import { useUserStore } from "@/lib/stores/user"
import { useMounted } from "@/hooks/useMounted"

import { AuthToggle } from "./actions/AuthToggle"
import { LogoutToggle } from "./actions/LogoutToggle"
import { QuickAccessToggle } from "./actions/QuickAccessToggle"
import { SettingsToggle } from "./actions/SettingsToggle"
import { ThemeSwitch } from "./actions/ThemeSwitch"

const animationVariants = {
  initial: { opacity: 0, y: -15 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -15 },
}

const transition = {
  type: "tween",
  ease: "easeOut",
  duration: 0.25,
}

const Actions: FC = ({}) => {
  const mounted = useMounted()
  const { user } = useUserStore()

  if (!mounted) return null

  return (
    <motion.div
      className="ml-auto flex items-center gap-x-2"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={animationVariants}
      transition={transition}
    >
      <QuickAccessToggle />

      {user ? (
        <div className="hidden sm:flex gap-x-2">
          <SettingsToggle />
          <LogoutToggle />
        </div>
      ) : (
        <AuthToggle />
      )}

      <ThemeSwitch />
    </motion.div>
  )
}

export { Actions }
