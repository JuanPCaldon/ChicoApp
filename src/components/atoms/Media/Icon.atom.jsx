import React from 'react';
import PropTypes from 'prop-types';
import './Icon.atom.css';

const Icon = ({ iconClass, size, className }) => (
    <i className={`${iconClass} ${size} ${className}`} />
);

Icon.propTypes = {
    iconClass: PropTypes.string.isRequired,
    size: PropTypes.string,
    className: PropTypes.string,
};

Icon.defaultProps = {
    size: '',
    className: '',
};

export default Icon;