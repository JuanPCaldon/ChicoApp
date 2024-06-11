import React from 'react';
import PropTypes from 'prop-types';
import './InputPassword.atom.css';
/**
 * InputPassword component
 * Renders an input password field with provided value, onChange and placeholder props
 * @param {Object} props - The properties for the InputPassword component.
 * @param {string} props.value - The value of the input password field.
 * @param {function} props.onChange - The event handler function for the input password field change event.
 * @param {string} [props.placeholder] - The placeholder text for the input password field.
 * @returns {JSX.Element} The rendered input password field.
 */
const InputPassword = ({ onChange, placeholder }) => (
    // Render an input password field with provided value, onChange and placeholder props
    <input
        type="password" // Input field type is set to password for security reasons
        onChange={onChange} // onChange prop sets the event handler function for the input field change event
        placeholder={placeholder}// placeholder prop sets the placeholder text for the input field
    />
);

InputPassword.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default InputPassword;