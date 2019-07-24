import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import ImageUploadWrapper from 'components/common/ImageUploadWrapper';

const listImagesPreset = process.env.REACT_APP_CLOUDINARY_LIST_IMAGES_UPLOAD_PRESET;

const UploadButton = styled.button`
    border: 2px dashed #ccc;
    border-radius: 18px 0;
    min-height: 10rem;
    background-color: #f1f1f1;
    width: 100%;
    padding: ${props => props.theme.paddingS};
    color: ${props => props.theme.darkBorderColor};
    outline: none;
    margin-bottom: 1rem;
    font-size: 0.75rem;

    &:focus {
        border-color: ${props => props.theme.darkBorderColor};
    }
`;

class ImageUploadButton extends Component {
    static propTypes = {
        onImageUpload: PropTypes.func.isRequired,
        children: PropTypes.node,
        onUploadError: PropTypes.func,
        uploadPreset: PropTypes.string,
        widgetProps: PropTypes.object,
    };

    static defaultProps = {
        children: 'Add Image',
        onUploadError: console.error,
        uploadPreset: listImagesPreset,
        widgetProps: {},
    };

    handleImageUpload = (error, result) => {
        if (result.event === 'success') {
            this.props.onImageUpload(result.info.url);
        } else if (error && error.message) {
            this.props.onUploadError(error.message);
        }
    };

    render() {
        return (
            <ImageUploadWrapper
                uploadPreset={this.props.uploadPreset}
                onUpload={this.handleImageUpload}
                widgetProps={this.props.widgetProps}
            >
                {(openImageUploader) => (
                    <UploadButton type="button" onClick={openImageUploader}>
                        {this.props.children}
                    </UploadButton>
                )}
            </ImageUploadWrapper>
        );
    }
}

export default ImageUploadButton;
