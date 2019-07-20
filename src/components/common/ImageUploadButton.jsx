import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

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

const ImageUploadButton = (props) => {
    return (
        <UploadButton type="button">
            {props.children}
        </UploadButton>
    );
};

ImageUploadButton.propTypes = {
    children: PropTypes.node.isRequired,
    onImageUpload: PropTypes.func,
};

ImageUploadButton.defaultProps = {
    onImageUpload: () => {},
};

export default ImageUploadButton;
