const ButtonSuccess = ({ variant, label, url, className, onChange, onClick }) => {
  return(
    <button className={`btn btn-success ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
  )
}

export default ButtonSuccess