import React from 'react';
import PropTypes from 'prop-types';
import './Radio.atom.css';
/**
 * Render a radio input with label.
 *
 * @param {Object} props - The properties for the Radio component.
 *
 * @param {string} props.id - The id of the radio.
 * @param {string} props.name - The name of the radio.
 * @param {string} props.value - The value of the radio.
 * @param {boolean} props.checked - The checked state of the radio.
 * @param {function} props.onChange - The event handler for the radio change event.
 * @param {string} [props.label] - The label text for the radio.
 *
 * @return {JSX.Element} The rendered radio component.
 */
const Radio = ({ id, name, value, checked, onChange, label }) => {
    // Render a radio input with label.
    return (
        <div className="radio-container">
            {/* Render the radio input. */}
            <input
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="radio-input"
            />
            {/* Render the label for the radio if label is provided. */}
            {label && <label htmlFor={id} className="radio-label">{label}</label>}
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
};

Radio.defaultProps = {
    label: '',
};

export default Radio;