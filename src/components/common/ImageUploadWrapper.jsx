import PropTypes from 'prop-types';

let widget;
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

/**
 * The function signature of onUpload is (error, result).
 * When result.event === 'success', you can get the image info from result.info.
 * `result.info.url` will be the image URL we want.
 */

const ImageUploadWrapper = ({ children, onUpload, uploadPreset, widgetProps }) => {
    const handleOpenWidget = () => {
        if (!widget && window.cloudinary) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: CLOUD_NAME,
                uploadPreset: uploadPreset,
            }, onUpload);
        }

        if (widget) {
            widget.update(widgetProps);
            widget.open();
        } else {
            console.warn('Cloudinary is not initialized yet');
        }
    };

    return children(handleOpenWidget);
}

ImageUploadWrapper.propTypes = {
    onUpload: PropTypes.func.isRequired,
    children: PropTypes.func.isRequired,
    uploadPreset: PropTypes.string.isRequired,
};

export default ImageUploadWrapper;
