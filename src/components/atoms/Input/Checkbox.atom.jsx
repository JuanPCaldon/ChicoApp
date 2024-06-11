import React from 'react';
import PropTypes from 'prop-types';
import './Checkbox.atom.css';
/**
 * Checkbox Component
 *
 * Renders a checkbox input with label.
 *
 * @param {Object} props - The properties for the Checkbox component.
 * @param {string} props.id - The id of the checkbox.
 * @param {string} props.name - The name of the checkbox.
 * @param {boolean} props.checked - The checked state of the checkbox.
 * @param {function} props.onChange - The event handler for the checkbox change event.
 * @param {string} [props.label] - The label text for the checkbox.
 *
 * @return {JSX.Element} The rendered checkbox component.
 */

/**
 * Renders a checkbox input with label.
 *
 * @param {Object} props - The properties for the Checkbox component.
 *
 * @return {JSX.Element} The rendered checkbox component.
 */
const Checkbox = ({ id, name, checked, onChange, label }) => {
    // Render a checkbox input with label.
    return (
        <div className="checkbox-container">
            {/* Render the checkbox input. */}
            <input
                type="checkbox"
                id={id}
                name={name}
                checked={checked}
                onChange={onChange}
                className="checkbox-input"
            />
            {/* Render the label for the checkbox if label is provided. */}
            {label && <label htmlFor={id} className="checkbox-label">{label}</label>}
        </div>
    );
};


Checkbox.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string,
};

Checkbox.defaultProps = {
    label: '',
};

export default Checkbox;