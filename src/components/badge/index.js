import { TYPES } from "./BadgeTypes"

const Badge = ({ variant, label, className }) => {

  const BadgeType = TYPES[variant]

  return(
    <BadgeType
      variant={variant}
      label={label}
      className={className} />
  )
}

export default Badge