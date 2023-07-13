import PropTypes from 'prop-types';

export const InputField = (props) => {

  const { type, name, placeholder, isRequired, onChange, hasIcon, label, typeLabel, className, value } = props;

  return(
    <div className="form-group">
      <input
        type={type}
        className={`form-control ${hasIcon ? 'pl-9' : ''} ${className}`}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        label={label}
        value={value}
        onChange={onChange} />
        {hasIcon && 
          <img
            className="absolute left-1 top-0 bottom-0 my-auto z-10 w-6 h-6"
            src={hasIcon}
            alt="placeholder image" />
        }
        {label && 
          <fieldset className={typeLabel === 'float' ? 'float-label' : 'default-label'}>{label}</fieldset>
        }
    </div>
  )
}

InputField.proptypes = {
  isRequired: PropTypes.bool,
  hasIcon: PropTypes.string,
  label: PropTypes.string
}
InputField.defaultProps = {
  isRequired: false,
  hasIcon: '',
  label: ''
}