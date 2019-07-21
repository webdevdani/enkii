import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';

import ImageUploadButton from 'components/common/ImageUploadButton';
import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';

// To-do: Get width from theme?

const ImageEditor = (props) => {
    return props.src ?
        (
            <Image
                publicId={getPublicIdFromCloudinaryUrl(props.src)}
                dpr="auto"
            >
                <Transformation width="600" height="400" crop="fill" />
            </Image>
        ) : (
            <ImageUploadButton
                onImageUpload={props.onChange}
                widgetProps={{
                    publicId: `${props.userId}_${props.listId}_${props.listItemOrder}`,
                    tags: [`user:${props.userId}`, `list:${props.listId}`],
                    resourceType: 'image',
                    maxImageWidth: 1000,
                    maxImageHeight: 1000,
                }}
            />
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
