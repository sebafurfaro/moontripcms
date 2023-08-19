import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function ProyectoPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Proyecto" />
      </div>
    </div>
  )
}

ProyectoPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}