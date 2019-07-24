import PropTypes from 'prop-types';

let widget;
const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;

const ImageUploadWrapper = (props) => {
    const handleImageUpload = (error, result) => {
        if (result.event === 'success') {
            props.onUpload(result.info.url);
        } else if (error && error.message) {
            props.onError(error.message);
        }
    };

    const handleOpenWidget = () => {
        if (!widget && window.cloudinary) {
            widget = window.cloudinary.createUploadWidget({
                cloudName: CLOUD_NAME,
                uploadPreset: props.uploadPreset,
            }, handleImageUpload);
        }

        if (widget) {
            widget.update(props.widgetProps);
            widget.open(null, props.files ? { files: props.files } : null);
        } else {
            console.warn('Cloudinary is not initialized yet');
        }
    };

    return props.children(handleOpenWidget);
}

ImageUploadWrapper.propTypes = {
    /**
     * Gets called with the URL of the uploaded asset
     */
    onUpload: PropTypes.func.isRequired,

    /**
     * [onError description]
     * @type {[type]}
     */
    onError: PropTypes.func,

    /**
     * Children have to be a function in order to
     * pass the 'handleOpenWidget' function
     */
    children: PropTypes.func.isRequired,

    /**
     * Upload presets can be found in the env file
     */
    uploadPreset: PropTypes.string.isRequired,

    /**
     * Customization props can be found here:
     * https://cloudinary.com/documentation/upload_widget
     */
    widgetProps: PropTypes.object,

    /**
     * If you want to open the upload widget with an image
     * for editing, pass the image source in an array
     */
    files: PropTypes.arrayOf(PropTypes.string),
};

ImageUploadWrapper.defaultProps = {
    onError: console.error,
    widgetProps: {},
    files: null,
};

export default ImageUploadWrapper;
