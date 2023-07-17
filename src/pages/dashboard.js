import AppStoreIcon from "@/components/forms/input/icons/AppStoreIcon";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {

  return(
    <div className="flex items-center space-x-3">
    </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}