import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function ServiceAddPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Crear Servicio" />
      </div>
    </div>
  )
}

ServiceAddPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}