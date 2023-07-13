import { TYPES } from "./AlertTypes"

export const Alert = ({ type, label }) => {

  const AlertType = TYPES[type]

  return(
    <AlertType
      type={type}
      label={label}
    />
  )
}