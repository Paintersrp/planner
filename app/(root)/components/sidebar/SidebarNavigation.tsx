import { Fragment, type FC } from "react"

import { siteConfig } from "@/config/site"
import { useSidebar } from "@/lib/stores/sidebar"
import { ScrollArea } from "@/components/ui/ScrollArea"
import { Separator } from "@/components/ui/Separator"

import { SidebarItem } from "./SidebarItem"

const SidebarNavigation: FC = () => {
  const { setOpen } = useSidebar()

  return (
    <ScrollArea className="my-4 pb-10">
      <div className="space-y-4">
        <div className="flex flex-col space-y-3">
          {siteConfig.mainNav?.map(
            (item) =>
              item.href && (
                <SidebarItem
                  key={item.href}
                  href={item.href}
                  onOpenChange={setOpen}
                  icon={item.icon}
                  className="flex items-center"
                >
                  {item.title}
                </SidebarItem>
              )
          )}
        </div>

        <div className="flex flex-col space-y-2">
          <Separator className="opacity-[65%]" />

          {siteConfig.sidebarNav.map((item, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <h4 className="font-medium">{item.title}</h4>

              {item?.items?.length &&
                item.items.map((item) => (
                  <Fragment key={item.href}>
                    {item.href ? (
                      <SidebarItem
                        href={item.href}
                        onOpenChange={setOpen}
                        className="text-muted-foreground text-sm font-medium"
                      >
                        {item.title}
                      </SidebarItem>
                    ) : (
                      item.title
                    )}
                  </Fragment>
                ))}
            </div>
          ))}
        </div>
      </div>
    </ScrollArea>
  )
}

export { SidebarNavigation }
