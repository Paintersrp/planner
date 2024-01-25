import { create } from "zustand"

interface PlannerModalStore {
  open: boolean
  setOpen: (open: boolean) => void
}

const usePlannerModal = create<PlannerModalStore>((set) => ({
  open: false,
  setOpen: (open) => {
    set({ open })
  },
}))

export { usePlannerModal }
