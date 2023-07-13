import { CheckCircleIcon } from "@heroicons/react/24/solid"

const AlertSuccess = ({ label }) => {
  return(
    <div className="alert alert-success">
      <CheckCircleIcon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  )
}

export default AlertSuccess