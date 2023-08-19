import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function PlansPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Planes" />
      </div>
    </div>
  )
}

PlansPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}