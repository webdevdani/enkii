import PropTypes from 'prop-types';
import createId from 'utils/createId';

export const ID = 'id';
export const TITLE = 'title';
export const URL = 'url';
export const IMAGE_URL = 'imgURL';
export const DESCRIPTION = 'desc';
export const ORDER = 'order';

export const listItemPropType = {
    [ID]: PropTypes.string,
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

export function createNewListItem(options = { [ORDER]: 1 }) {
    return {
        ...schema,
        [ID]: createId(10),
        ...options,
    };
}

export default schema;
