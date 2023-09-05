import { MockAdsDash } from "@/components/forDashboard/mockup/MockAdsDash";
import { MockPostsDash } from "@/components/forDashboard/mockup/MockPostsDash";
import { MockUsersDash } from "@/components/forDashboard/mockup/MockUsersDash";
import { MockVerticalGraphDash } from "@/components/forDashboard/mockup/MockVerticalGraphDash";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {

  return(
    <div className="space-y-8">
      <h1 className="font-light text-4xl">Bienvenido!</h1>
      <div className="grid grid-cols-3 gap-4">
        <MockUsersDash />
      </div>
      <div className="grid grid-cols-9 gap-4">
        <div className="col-span-6">
          <MockAdsDash />
          <div className="grid gird-cols-4 gap-4">
            <MockPostsDash />
          </div>
        </div>
        <div className="col-span-3">
          <MockVerticalGraphDash />
        </div>
      </div>
    </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}