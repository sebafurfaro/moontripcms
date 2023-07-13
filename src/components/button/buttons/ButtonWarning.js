const ButtonWarning = ({ variant, label, url, className, onChange, onClick }) => {
  return <button className={`btn btn-warning ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
}

export default ButtonWarning