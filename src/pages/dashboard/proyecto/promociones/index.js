import { PanelHeader } from "@/components/Panel/PanelHeader"
import DashLayout from "@/layouts/DashLayout"

export default function PromoPage() {
  return(
    <div className="flex">
      <div className="panel">
        <PanelHeader title="Promociones" />
      </div>
    </div>
  )
}

PromoPage.getLayout = function(page) {
  return <DashLayout>{page}</DashLayout>
}