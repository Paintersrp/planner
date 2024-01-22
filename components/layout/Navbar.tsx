"use client"

import { useState, type FC } from "react"

import { Icons } from "@/components/ui/Icons"

import { AnimatedNav } from "../ui/animated/AnimatedNav"
import { useAnimatedNav } from "../ui/animated/hooks/useAnimatedNav"

const Navbar: FC = () => {
  const navItems = [
    {
      id: "home",
      title: "Home",
      href: "/",
    },
  ]

  const [navProps] = useState({
    navItems,
    initialItemId: undefined,
  })

  const { itemProps } = useAnimatedNav(navProps)

  return (
    <div className="flex">
      <div className="flex items-center space-x-2 mr-2">
        <Icons.Notebook className="size-6" />
        <span className="text-xl font-semibold">Planner</span>
      </div>

      <AnimatedNav {...itemProps} />
    </div>
  )
}

export { Navbar }
