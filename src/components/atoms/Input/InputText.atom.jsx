import React from 'react';
import PropTypes from 'prop-types';
import './InputText.atom.css';

/**
 * InputText component
 * Renders an input text field with provided value, onChange and placeholder props
 * @param {Object} props - The properties for the InputText component.
 * @param {string} props.value - The value of the input text field.
 * @param {function} props.onChange - The event handler function for the input text field change event.
 * @param {string} [props.placeholder] - The placeholder text for the input text field.
 * @returns {JSX.Element} The rendered input text field.
 */
const InputText = ({ id, name, placeholder, required, onChange }) => (
    // Render an input text field with provided value, onChange and placeholder props
    <input
        type="text"
        id={id}
        name = {name}
        placeholder={placeholder} // Set the placeholder text for the input text field
        required= {required}
        onChange={onChange}
        //value={value}
        />
);

InputText.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func
    //value: PropTypes.string

};

export default InputText;