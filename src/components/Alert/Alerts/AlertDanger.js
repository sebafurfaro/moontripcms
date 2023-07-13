import { ExclamationTriangleIcon } from "@heroicons/react/24/solid"

const AlertDanger = ({ label }) => {
  return(
    <div className="alert alert-danger">
      <ExclamationTriangleIcon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  )
}

export default AlertDanger