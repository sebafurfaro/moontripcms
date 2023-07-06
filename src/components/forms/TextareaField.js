import PropTypes from 'prop-types';

export const TextareaField = ({ name, id, cols, rows, placeholder, onChange, isRequired, label }) => {
  return(
    <div className="form-group">
      <textarea
        name={name}
        className="form-control"
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
    </div>
  )
}

TextareaField.proptypes = {
  label: PropTypes.string
}
TextareaField.defaultProps = {
  label: ''
}