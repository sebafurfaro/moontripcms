const ButtonDanger = ({ variant, label, url, className, onChange, onClick }) => {
  return <button className={`btn btn-danger ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
}

export default ButtonDanger