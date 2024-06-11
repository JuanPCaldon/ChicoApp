import React from 'react';
import PropTypes from 'prop-types';

/**
 * Renders an image element with the provided source, alternate text, width, and height.
 *
 * @param {Object} props - The properties for the image component.
 * @param {string} props.src - The source URL of the image.
 * @param {string} props.alt - The alternate text for the image.
 * @param {number} [props.width] - The width of the image.
 * @param {number} [props.height] - The height of the image.
 * @return {JSX.Element} The rendered image element.
 */
const Image = ({ src, alt, width, height }) => {
    // Render an image element with the provided source, alternate text, width, and height.
    return (
        <img
            src={src}
            alt={alt}
            width={width}
            height={height}
        />
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

export default Image;