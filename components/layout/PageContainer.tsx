import { forwardRef, type DetailedHTMLProps, type HTMLAttributes } from "react"

import { cn } from "@/lib/utils"

interface PageContainerProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  className?: string
}

const PageContainer = forwardRef<HTMLElement, PageContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "sm:container gap-6 px-6 sm:px-4 py-4 md:py-6 space-y-6",
          className
        )}
        {...props}
      />
    )
  }
)

PageContainer.displayName = "PageContainer"

export { PageContainer }
