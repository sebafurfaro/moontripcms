import { LastCustomer } from "@/components/forDashboard/LastCustomer";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {



  return(
    <div className="flex items-center">
      <LastCustomer />
    </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}