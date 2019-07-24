import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Image, Transformation } from 'cloudinary-react';

import IconButton from 'components/common/IconButton';
import ImageUploadWrapper from 'components/common/ImageUploadWrapper';
import ImageUploadButton, { listImagesPreset } from 'components/common/ImageUploadButton';
import TrashIcon from 'assets/icons/Trash';
import EditIcon from 'assets/icons/Edit';
import gappedGroupStyles from 'styles/mixins/gappedGroup';
import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';

// To-do: Get width from theme?

const EditToolsWrapper = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.4);
    opacity: 0;
    transition: opacity 0.5s;
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    justify-content: flex-end;

    svg {
        color: ${props => props.theme.lightFontColor};
    }
`;

const ButtonGroup = styled.div`
    ${props => gappedGroupStyles(props)}
    align-self: flex-end;
    padding: 0.5rem;
`;

const ImageWrapper = styled.div`
    position: relative;

    &:focus-within ${EditToolsWrapper},
    &:hover ${EditToolsWrapper} {
        opacity: 1;
    }
`;

const ImageEditor = (props) => {
    const widgetProps = {
        publicId: `${props.userId}_${props.listId}_${props.listItemOrder}`,
        tags: [`user:${props.userId}`, `list:${props.listId}`],
        resourceType: 'image',
        maxImageWidth: 1000,
        maxImageHeight: 1000,
        multiple: false,
        cropping: true,
        showUploadMoreButton: false,
    };

    return (
        <div style={{ marginBottom: '1rem' }}>
            {props.src ?
                (
                    <ImageUploadWrapper
                        onUpload={props.onChange}
                        uploadPreset={listImagesPreset}
                        files={[props.src]}
                        widgetProps={widgetProps}
                    >
                        {(handleOpenWidget) => (
                            <ImageWrapper>
                                <Image
                                    publicId={getPublicIdFromCloudinaryUrl(props.src)}
                                    dpr="auto"
                                >
                                    <Transformation width="600" height="400" crop="fill" />
                                </Image>
                                <EditToolsWrapper>
                                    <ButtonGroup>
                                        <IconButton onClick={handleOpenWidget} label="Edit Image">
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton onClick={() => props.onChange('')} label="Remove Image">
                                            <TrashIcon />
                                        </IconButton>
                                    </ButtonGroup>
                                </EditToolsWrapper>
                            </ImageWrapper>
                        )}
                    </ImageUploadWrapper>
                ) : (
                    <ImageUploadButton
                        onImageUpload={props.onChange}
                        widgetProps={widgetProps}
                    />
                )
            }
        </div>
    );
}

ImageEditor.propTypes = {
    src: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    listId: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    listItemOrder: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

ImageEditor.defaultProps = {
    src: null,
    listItemOrder: 'cover'
};

export default ImageEditor;
