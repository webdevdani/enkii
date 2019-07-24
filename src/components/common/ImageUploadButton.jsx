import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import ImageUploadWrapper from 'components/common/ImageUploadWrapper';

export const listImagesPreset = process.env.REACT_APP_CLOUDINARY_LIST_IMAGES_UPLOAD_PRESET;

const UploadButton = styled.button`
    border: 2px dashed #ccc;
    border-radius: 18px 0;
    min-height: 10rem;
    background-color: #f1f1f1;
    width: 100%;
    padding: ${props => props.theme.paddingS};
    color: ${props => props.theme.darkBorderColor};
    outline: none;
    font-size: 0.75rem;

    &:focus {
        border-color: ${props => props.theme.darkBorderColor};
    }
`;

const ImageUploadButton = (props) => {
    return (
        <ImageUploadWrapper
            uploadPreset={props.uploadPreset}
            onUpload={props.onImageUpload}
            onError={props.onUploadError}
            widgetProps={props.widgetProps}
        >
            {(openImageUploader) => (
                <UploadButton type="button" onClick={openImageUploader}>
                    {props.children}
                </UploadButton>
            )}
        </ImageUploadWrapper>
    );
}

ImageUploadButton.propTypes = {
    onImageUpload: PropTypes.func.isRequired,
    children: PropTypes.node,
    onUploadError: PropTypes.func,
    uploadPreset: PropTypes.string,
    widgetProps: PropTypes.object,
};

ImageUploadButton.defaultProps = {
    children: 'Add Image',
    onUploadError: console.error,
    uploadPreset: listImagesPreset,
    widgetProps: {},
};

export default ImageUploadButton;
