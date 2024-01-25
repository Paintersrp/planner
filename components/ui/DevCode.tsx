import type { FC } from "react"

import { ScrollArea } from "./ScrollArea"

interface DevCodeProps {
  data: any
}

const DevCode: FC<DevCodeProps> = ({ data }) => {
  if (process.env.NODE_ENV === "production") return null

  return (
    <ScrollArea className="max-h-[600px] mt-2 w-full rounded-md p-4 border whitespace-pre-wrap">
      <pre className="">
        <code className="text-primary">{JSON.stringify(data, null, 2)}</code>
      </pre>
    </ScrollArea>
  )
}

export { DevCode }
