const TextareaField = ({ name, icon, id, cols, rows, placeholder, onChange, isRequired, label }) => {
  return(
    <>
      <textarea
        name={name}
        className={`from-control`}
        id={id}
        cols={cols}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
        required={isRequired}
        autoComplete={false}
      />
      {label && 
        <fieldset className="float-label">{label}</fieldset>
      }
      {icon && icon}
    </>
  )
}

export default TextareaField;