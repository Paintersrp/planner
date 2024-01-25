"use client"

import {
  useState,
  type Dispatch,
  type FC,
  type ReactNode,
  type SetStateAction,
} from "react"

import { useMediaQuery } from "@/hooks/useMediaQuery"
import { Button } from "@/components/ui/Button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/Drawer"

import { Icons } from "../ui/Icons"

interface ResponsiveFormModalProps {
  open: boolean
  setOpen: (open: boolean) => void
  title: string
  description?: string
  onSubmit: () => void
  errors: boolean
  children: ReactNode
}

const ResponsiveFormModal: FC<ResponsiveFormModalProps> = ({
  open,
  setOpen,
  title,
  description,
  onSubmit,
  errors,
  children,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  const handleSubmit = () => {
    try {
      setIsLoading(true)

      onSubmit()

      if (!errors) {
        setOpen(false)
      }
    } catch (error) {
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>

            {description && (
              <DialogDescription>{description}</DialogDescription>
            )}
          </DialogHeader>

          {children}

          <DialogFooter className="gap-2 sm:gap-0 justify-end md:justify-end">
            <DialogClose asChild>
              <Button disabled={isLoading} isLoading={isLoading} type="button">
                Cancel
              </Button>
            </DialogClose>
            <DialogClose>
              <Button
                disabled={isLoading}
                isLoading={isLoading}
                variant="success"
                onClick={(e) => {
                  e.stopPropagation()
                  handleSubmit()
                }}
                type="button"
                autoFocus
              >
                Submit
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>{title}</DrawerTitle>

          {description && <DrawerDescription>{description}</DrawerDescription>}
        </DrawerHeader>

        <div className="p-4">{children}</div>

        <DrawerFooter className="flex-row justify-center gap-8">
          <DrawerClose asChild>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              type="button"
              size="icon"
              variant="destructive"
            >
              <Icons.Close className="size-6" />
            </Button>
          </DrawerClose>
          <DrawerClose>
            <Button
              disabled={isLoading}
              isLoading={isLoading}
              onClick={handleSubmit}
              variant="success"
              size="icon"
              type="button"
              autoFocus
            >
              <Icons.Check className="size-6" />
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export { ResponsiveFormModal }
