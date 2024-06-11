import React from 'react';
import PropTypes from 'prop-types';
import './Heading.atom.css';

/**
 * Heading component renders a heading element based on the provided level.
 *
 * @param {Object} props - The properties for the Heading component.
 * @param {number} props.level - The level of the heading element (from 1 to 6).
 * @param {ReactNode} props.children - The content of the heading element.
 * @param {string} [props.className] - The CSS class name for the heading element.
 * @param {function} [props.onClick] - The event handler function for the click event.
 * @return {JSX.Element} The rendered heading element.
 */
const Heading = ({ level, children, className, onClick }) => {
    // Determine the heading tag based on the level
    const Tag = `h${level}`;

    // Render the heading element with the specified properties
    return (
        // Heading element with the specified tag, class, and click event handler
        <Tag className={className} onClick={onClick}>
            {children}
        </Tag>
    );
};

Heading.propTypes = {
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Heading.defaultProps = {
    className: '',
    onClick: null,
};

export default Heading;