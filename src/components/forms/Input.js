import PropTypes from 'prop-types';
import { TYPES } from "./input/InputType";
import { ICONS } from './input/IconsType';

const Input = ({ type, label, icon, typeLabel, name, placeholder, className, onChange, value, isRequired }) => {

  const InputType = TYPES[type]
  const IconComponent = ICONS[icon]

  return(
    <div className="form-group">
      <InputType
        label={label}
        clasName={className}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        name={name}
        typeLabel={typeLabel}
        isRequired={isRequired}
        icon={IconComponent}
      />
    </div>
  )
}

export default Input;

Input.proptypes = {
  isRequired: PropTypes.bool,
}
Input.defaultProps = {
  isRequired: true,
}