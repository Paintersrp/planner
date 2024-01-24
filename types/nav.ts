export interface NavItem {
  id: string
  title: string
  href: string
  icon: JSX.Element
  items?: NavItem[] & { items: never[] }
}

export interface SecondaryNavItem {
  title: string
  items: {
    title: string
    href: string
    items: never[]
  }[]
}
