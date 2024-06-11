import React from 'react';
import PropTypes from 'prop-types';
import './Paragraph.atom.css';

const Paragraph = ({ children, className, onClick }) => (
    <p className={className} onClick={onClick}>
        {children}
    </p>
);

Paragraph.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

Paragraph.defaultProps = {
    className: '',
    onClick: null,
};

export default Paragraph;