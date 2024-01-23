import { create } from "zustand"

interface SidebarStore {
  open: boolean
  setOpen: (open: boolean) => void
}

const useSidebar = create<SidebarStore>((set) => ({
  open: false,
  setOpen: (open) => {
    set({ open })
  },
}))

export { useSidebar }
