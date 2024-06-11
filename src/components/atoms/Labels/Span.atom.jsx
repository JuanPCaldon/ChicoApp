import React from 'react';
import PropTypes from 'prop-types';

const Span = ({ children, className, onClick }) => (
    <span className={className} onClick={onClick}>
        {children}
    </span>
);

Span.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Span.defaultProps = {
    className: '',
    onClick: null,
};

export default Span;