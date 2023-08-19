import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function PlanAddPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Crear Plan" />
      </div>
    </div>
  )
}

PlanAddPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}