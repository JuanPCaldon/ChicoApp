import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './Button.atom.css';

/**
 * Renders a button component with the specified properties.
 *
 * @param {Object} props - The properties for the button component.
 * @param {string} props.className - The CSS class name for the button.
 * @param {string} props.label - The label text for the button.
 * @param {Function} props.onClick - The event handler function for the button click event.
 * @param {string} [props.type='button'] - The type of the button.
 * @return {JSX.Element} The rendered button component.
 */
const Button = ({className, label, onClick, type = 'button', navigateTo }) => {
    // Render the button component with the specified properties.

    const navigate = useNavigate();

    const handleClick = () => {
        if (navigateTo) {
            navigate(navigateTo);
        }
        if (onClick) {
            onClick();
        }
    };
    return (
        // Button component with type, onClick, and className props.
        <button 
            type={type} 
            onClick={handleClick} 
            className={`btn btn-${className}`}
        >
            {/* Button label */}
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    className: PropTypes.string,
    navigateTo: PropTypes.string
};

export default Button;