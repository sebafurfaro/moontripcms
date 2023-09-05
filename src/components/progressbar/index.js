import { TYPES } from "./ProgressBarTypes";

const ProgressBar = ({ variant, value }) => {

  const ProgressBarType = TYPES[variant]
  
  return(
    <ProgressBarType variant={variant} value={value} />
  )
}

export default ProgressBar;