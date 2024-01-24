import { Icons } from "@/components/ui/Icons"

export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Planner",
  author: "SRP",
  description: "Designed with TypeScript, built with React and NextJS",
  footerNav: [
    {
      id: "github",
      title: "GitHub",
      href: "https://github.com/Paintersrp/planner",
      external: true,
      icon: <Icons.GitHub className="mr-2 size-4" />,
    },
    {
      id: "twitter",
      title: "Twitter",
      href: "https://twitter.com/Paintersrp",
      external: true,
      icon: <Icons.Twitter className="mr-2 size-4" />,
    },
    {
      id: "facebook",
      title: "Facebook",
      href: "https://facebook.com/Paintersrp",
      external: true,
      icon: <Icons.Facebook className="mr-2 size-4" />,
    },
    {
      id: "instagram",
      title: "Instagram",
      href: "https://instagram.com/Paintersrp",
      external: true,
      icon: <Icons.Instagram className="mr-2 size-4" />,
    },
    {
      id: "email",
      title: "Email",
      href: "mailto:paintersrp@gmail.com",
      external: true,
      icon: <Icons.Contact className="mr-2 size-4" />,
    },
  ],
  root: {
    mainNav: [
      {
        id: "Dashboard",
        title: "Dashboard",
        href: "/dashboard",
        icon: <Icons.Panels className="mr-2 size-5" />,
      },
      {
        id: "features",
        title: "Features",
        href: "/features",
        icon: <Icons.Features className="mr-2 size-5" />,
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
  },
  planner: {
    mainNav: [
      {
        id: "dashboard",
        title: "Dashboard",
        href: "/",
        icon: <Icons.AppWindow className="mr-2 size-5" />,
      },
      {
        id: "calendar",
        title: "Calendar",
        href: "/",
        icon: <Icons.Calendar className="mr-2 size-5" />,
      },
      {
        id: "reports",
        title: "Reports",
        href: "/",
        icon: <Icons.FileBarChart className="mr-2 size-5" />,
      },
      {
        id: "settings",
        title: "Settings",
        href: "/",
        icon: <Icons.Settings className="mr-2 size-5" />,
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
  },

  overview: {
    mainNav: [
      {
        id: "planners",
        title: "Planners",
        href: "/dashboard/planners",
        icon: <Icons.Notebook className="mr-2 size-5" />,
      },
      {
        id: "account",
        title: "Account",
        href: "/dashboard/account",
        icon: <Icons.UserSquare className="mr-2 size-5" />,
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
  },
  links: {
    email: "mailto:paintersrp@gmail.com",
    github: "https://github.com/Paintersrp/planner",
  },
}
