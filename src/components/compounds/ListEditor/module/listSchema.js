import PropTypes from 'prop-types';

import listItemSchema, { listItemPropType, ORDER } from './listItemSchema';

export const TITLE = 'title';
export const IMAGE_URL = 'imageUrl';
export const DESCRIPTION = 'desc';
export const TYPE = 'type';
export const LIST_ITEMS = 'listItems';

export const TYPE_OL = 'ordered';
export const TYPE_UL = 'unordered';

export const listPropType = {
    [TITLE]: PropTypes.string,
    [IMAGE_URL]: PropTypes.string,
    [DESCRIPTION]: PropTypes.string,
    [TYPE]: PropTypes.oneOf([
        TYPE_OL,
        TYPE_UL,
    ]),
    [LIST_ITEMS]: PropTypes.arrayOf(
        PropTypes.shape(listItemPropType)
    ),
};

const schema = {
    [TITLE]: '',
    [IMAGE_URL]: '',
    [DESCRIPTION]: '',
    [TYPE]: TYPE_OL,
    [LIST_ITEMS]: [
        {
            ...listItemSchema,
            [ORDER]: 1,
        },
    ],
};

export default schema;
