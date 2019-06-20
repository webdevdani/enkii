const ROOT_URL = `http://res.cloudinary.com/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload/`;

const getPublicIdFromCloudinaryUrl = photoUrl => photoUrl.replace(ROOT_URL, '');

export default getPublicIdFromCloudinaryUrl;
