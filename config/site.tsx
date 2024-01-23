import { Icons } from "@/components/ui/Icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Planner",
  author: "SRP",
  description: "Designed with TypeScript, built with React and NextJS",
  mainNav: [
    {
      title: "Dashboard",
      href: "/",
      icon: <Icons.AppWindow className="mr-2 size-5" />,
    },
    {
      title: "Calendar",
      href: "/",
      icon: <Icons.Calendar className="mr-2 size-5" />,
    },
    {
      title: "Reports",
      href: "/",
      icon: <Icons.FileBarChart className="mr-2 size-5" />,
    },
    {
      title: "Settings",
      href: "/",
      icon: <Icons.Settings className="mr-2 size-5" />,
    },
  ],
  footerNav: [
    {
      title: "GitHub",
      href: "https://github.com/Paintersrp/planner",
      external: true,
      icon: <Icons.GitHub className="mr-2 size-4" />,
    },
    {
      title: "Twitter",
      href: "https://twitter.com/Paintersrp",
      external: true,
      icon: <Icons.Twitter className="mr-2 size-4" />,
    },
    {
      title: "Facebook",
      href: "https://facebook.com/Paintersrp",
      external: true,
      icon: <Icons.Facebook className="mr-2 size-4" />,
    },
    {
      title: "Instagram",
      href: "https://instagram.com/Paintersrp",
      external: true,
      icon: <Icons.Instagram className="mr-2 size-4" />,
    },
    {
      title: "Email",
      href: "mailto:paintersrp@gmail.com",
      external: true,
      icon: <Icons.Contact className="mr-2 size-4" />,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs",
          items: [],
        },
      ],
    },
  ],
  links: {
    email: "mailto:paintersrp@gmail.com",
    github: "https://github.com/Paintersrp/planner",
  },
}
