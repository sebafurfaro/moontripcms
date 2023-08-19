import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextField = ({ type, icon, placeholder, name, label, typeLabel, className, onChange, value, isRequired }) => {
  return(
    <>
    {label && 
        <fieldset className={typeLabel === 'float' ? 'float-label' : 'default-label'}>{label}</fieldset>
      }
      <ReactQuill
        type="richText"
        className={`form-control ${icon && 'pl-9'} ${className}`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        required={isRequired}
      />
      {icon && icon}
    </>
  )
}

export default RichTextField;