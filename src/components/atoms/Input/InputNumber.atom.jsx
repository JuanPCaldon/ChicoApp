import React from 'react';
import PropTypes from 'prop-types';
import './InputNumber.atom.css';

/**
 * InputNumber component
 * Renders an input number field with provided value, onChange, and placeholder props.
 *
 * @param {Object} props - The properties for the InputNumber component.
 * @param {string} props.value - The value of the input number field.
 * @param {function} props.onChange - The event handler function for the input number field change event.
 * @param {string} [props.placeholder] - The placeholder text for the input number field.
 * @returns {JSX.Element} The rendered input number field.
 */
const InputNumber = ({onChange, placeholder }) => (
    // Render an input number field with provided value, onChange, and placeholder props
    // The type of the input field is set to "number" to ensure only numeric input is accepted
    <input
        type="number"
        onChange={onChange} // Set the event handler function for the input number field change event
        placeholder={placeholder} // Set the placeholder text for the input number field
    />
);

InputNumber.propTypes = {
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
};

export default InputNumber;