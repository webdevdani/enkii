import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import SideLabelInputWrapper from 'components/common/SideLabelInputWrapper';

const UploadButton = styled.button`
    border: 2px dashed #ccc;
    background-color: #f1f1f1;
    width: 100%;
    padding: ${props => props.theme.paddingS};
    color: ${props => props.theme.darkBorderColor};
    outline: none;

    &:focus {
        border-color: ${props => props.theme.darkBorderColor};
    }
`;

const ImageUploadButton = (props) => {
    return (
        <SideLabelInputWrapper label={props.label}>
            <UploadButton>{props.buttonText}</UploadButton>
        </SideLabelInputWrapper>
    );
}

ImageUploadButton.propTypes = {
    label: PropTypes.string,
    buttonText: PropTypes.string,
};

ImageUploadButton.defaultProps = {
    label: 'Image',
    buttonText: 'Add Image',
};

export default ImageUploadButton;