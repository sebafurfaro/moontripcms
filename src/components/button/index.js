import { TYPES } from "./ButtonTypes"

const Button = ({ variant, label, urlRedirect, className, onChange, onClick }) => {

  const ButtonType = TYPES[variant]

  return(
    <ButtonType
      variant={variant}
      label={label}
      url={urlRedirect}
      className={className}
      onClick={onClick}
      onChange={onChange}
    />
  )
}

export default Button