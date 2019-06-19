import React from 'react';
import PropTypes from 'prop-types';
import { CloudinaryContext } from 'cloudinary-react';

const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

const CloudinaryProvider = ({ children }) => {
    return (
        <CloudinaryContext cloudName={cloudName}>
            { children }
        </CloudinaryContext>
    );
}

CloudinaryProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default CloudinaryProvider;


