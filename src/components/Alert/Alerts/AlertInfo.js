import { InformationCircleIcon } from "@heroicons/react/24/solid"

const AlertInfo = ({ label }) => {
  return(
    <div className="alert alert-info">
      <InformationCircleIcon className="h-5 w-5" />
      <span>{label}</span>
    </div>
  )
}

export default AlertInfo