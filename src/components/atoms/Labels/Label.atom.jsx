import React from 'react';
import PropTypes from 'prop-types';
import './Label.atom.css';

const Label = ({ htmlFor, children, className, onClick }) => (
    <label htmlFor={htmlFor} className={className} onClick={onClick}>
        {children}
    </label>
);

Label.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Label.defaultProps = {
    className: '',
    onClick: null,
};

export default Label;
