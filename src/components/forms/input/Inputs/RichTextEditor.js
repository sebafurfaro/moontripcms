import { useState } from 'react';
import PropTypes from 'prop-types';

const RichTextEditor = ({ name, isRequired, label, typeLabel }) => {
  const [html, setHtml] = useState('');

  const handleHtmlChange = (event) => {
    const newHtml = event.target.innerHTML;
    setHtml(newHtml);
  };

  return (
    <div className="form-group">
      <div
        name={name}
        contentEditable
        className="form-control min-h-[350px]"
        dangerouslySetInnerHTML={{ __html: html }}
        onInput={handleHtmlChange}
        required={isRequired}
      />
      {label && 
        <fieldset className={typeLabel === 'float' ? 'float-label' : 'default-label'}>{label}</fieldset>
      }
    </div>
  );
};

export default RichTextEditor;

RichTextEditor.propTypes = {
  required: PropTypes.bool,
  label: PropTypes.string
}
RichTextEditor.defaultProps = {
  required: false,
  label: ''
}
