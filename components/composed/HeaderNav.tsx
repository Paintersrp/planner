"use client"

import { useState, type FC } from "react"

import { NavItem } from "@/types/nav"
import { AnimatedNav } from "@/components/animated/AnimatedNav"
import { useAnimatedNav } from "@/components/animated/hooks/useAnimatedNav"

interface HeaderNavProps {
  navItems: NavItem[]
}

const HeaderNav: FC<HeaderNavProps> = ({ navItems }) => {
  //   const navItems = [
  //     {
  //       id: "planners",
  //       title: "Planners",
  //       href: "/dashboard/planners",
  //     },
  //     {
  //       id: "account",
  //       title: "Account",
  //       href: "/dashboard/account",
  //     },
  //   ]

  const [navProps] = useState({
    navItems,
    initialItemId: undefined,
  })

  const { itemProps } = useAnimatedNav(navProps)

  return (
    <div className="hidden sm:flex">
      <AnimatedNav {...itemProps} />
    </div>
  )
}

export { HeaderNav }
