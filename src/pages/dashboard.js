
import Button from "@/components/button";
import DashDefault from "@/layouts/DashLayout";

export default function Dashboard() {

  const buttons = [
    {
      variant: 'success',
      label: 'Success'
    },
    {
      variant: 'info',
      label: 'Info'
    },
    {
      variant: 'warning',
      label: 'Warning'
    },
    {
      variant: 'danger',
      label: 'Danger'
    },
  ]

  return(
    <div className="flex items-center space-x-3">
      {buttons.map((btn, index) => (
        <Button variant={btn.variant} label={btn.label} key={index} />
      ))}
    </div>
  )
}

Dashboard.getLayout = function(page) {
  return <DashDefault>{page}</DashDefault>
}