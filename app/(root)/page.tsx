import { PageContainer } from "@/components/layout/PageContainer"

export default async function RootPage() {
  return (
    <PageContainer>
      <div className="grid grid-cols-7 w-full h-[300px] gap-4">
        <div className="border p-4 col-span-4 rounded-md">Hero CTA</div>
        <div className="border p-4 col-span-3 rounded-md">Hero Image</div>
      </div>
      <div className="grid grid-cols-7 w-full h-[300px] gap-4">
        <div className="border p-4 col-span-3 rounded-md">Overview Image</div>
        <div className="border p-4 col-span-4 rounded-md">
          Overview + Doc Links
        </div>
      </div>
    </PageContainer>
  )
}
