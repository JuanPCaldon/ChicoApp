import React from 'react';
import PropTypes from 'prop-types';
import './Link.atom.css'
/**
 * Link component renders an anchor tag with specified properties.
 *
 * @param {Object} props - The properties for the Link component.
 * @param {string} props.href - The URL that the link points to.
 * @param {ReactNode} props.children - The content of the link.
 * @param {string} [props.className] - The CSS class name for the link.
 * @param {function} [props.onClick] - The event handler function for the click event.
 * @return {JSX.Element} The rendered link.
 */
const Link = ({ href, children, className, onClick }) => (
    // Render an anchor tag with specified properties.
    <a href={href} className={className} onClick={onClick}>
        {/* Render the content of the link. */}
        {children}
    </a>
);

Link.propTypes = {
    href: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Link.defaultProps = {
    className: '',
    onClick: null,
};

export default Link;