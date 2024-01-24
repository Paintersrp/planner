import type { FC } from "react"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/Button"
import { Icons } from "@/components/ui/Icons"
import { Text } from "@/components/ui/Text"
import { TooltipWrapper } from "@/components/ui/Tooltip"
import { Spotlight } from "@/components/animated/Spotlight"

const Footer: FC = () => {
  return (
    <footer className="hidden sm:block bg-background bottom-0 z-40 w-full border-t px-4">
      <Spotlight shadows={false} className="border-0 w-full">
        <div className="px-4 sm:px-0 sm:container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          {/* Copyright Section */}
          <div className="flex space-x-2 items-center">
            <Text size="sm" className="dark:font-bold font-medium">
              SRP
            </Text>
          </div>

          <div className="flex flex-1 items-center justify-end space-x-4">
            <nav className="flex items-center space-x-1">
              {/* Github Button and Link */}
              <TooltipWrapper content="View code on Github">
                <Link
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.GitHub className="h-6 sm:h-6 w-6 sm:w-6" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
              </TooltipWrapper>

              {/* Portfolio Icon and Link */}
              <TooltipWrapper content="Contact Me">
                <Link
                  href={siteConfig.links.email}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.Contact className="h-6 sm:h-6 w-6 sm:w-6" />
                    <span className="sr-only">Email Address contact</span>
                  </div>
                </Link>
              </TooltipWrapper>
            </nav>
          </div>
        </div>
      </Spotlight>
    </footer>
  )
}

export { Footer }
