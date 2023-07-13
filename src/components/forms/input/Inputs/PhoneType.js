const PhoneType = ({ type, icon, placeholder, name, label, typeLabel, className, onChange, value, isRequired }) => {
  return(
    <div className="form-group">
      {label && 
        <fieldset className={typeLabel === 'float' ? 'float-label' : 'default-label'}>{label}</fieldset>
      }
      <input
        type="phone"
        className={`form-control ${icon && 'pl-9'} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        required={isRequired}
      />
      {icon && icon}
    </div>
  )
}

export default PhoneType