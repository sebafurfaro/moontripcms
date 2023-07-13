import { ExclamationCircleIcon } from "@heroicons/react/24/solid"

const AlertWarning = ({ label }) => {
  return(
    <div className="alert alert-warning">
      <ExclamationCircleIcon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  )
}

export default AlertWarning