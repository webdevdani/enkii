import PropTypes from 'prop-types';

export const TITLE = 'title';
export const URL = 'url';
export const IMAGE_URL = 'imageUrl';
export const DESCRIPTION = 'description';
export const ORDER = 'order';

export const listItemPropType = {
    [TITLE]: PropTypes.string,
    [URL]: PropTypes.string,
    [IMAGE_URL]: PropTypes.string,
    [DESCRIPTION]: PropTypes.string,
    [ORDER]: PropTypes.number,
};

const schema = {
    [TITLE]: '',
    [URL]: '',
    [IMAGE_URL]: '',
    [DESCRIPTION]: '',
};

export default schema;
