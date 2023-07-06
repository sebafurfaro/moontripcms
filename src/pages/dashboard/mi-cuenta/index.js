import { TabsH } from "@/components/Tabs/TabsH"
import DashDefault from "@/layouts/DashLayout"
import { TabsOptions } from "@/data/TabsOptions"
import { PanelHeader } from "@/components/Panel/PanelHeader"

export default function MyAccountPage() {
  return(
    <div className="flex flex-col p-5 bg-white rounded-md shadow-md w-full min-h-screen">
      <PanelHeader title="Mi cuenta"/>
      <TabsH tabs={TabsOptions} />
    </div>
  )
}

MyAccountPage.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}