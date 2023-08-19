import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function PromoAddPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Crear Promoción" />
      </div>
    </div>
  )
}

PromoAddPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}