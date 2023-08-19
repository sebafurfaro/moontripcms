import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function ServicePage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Servicios" />
      </div>
    </div>
  )
}

ServicePage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}