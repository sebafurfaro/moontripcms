const ButtonInfo = ({ variant, label, url, className, onChange, onClick }) => {
  return <button className={`btn btn-info ${className}`} onChange={onChange} onClick={onClick}>{label}</button>
}

export default ButtonInfo