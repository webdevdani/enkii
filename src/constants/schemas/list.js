import PropTypes from 'prop-types';

import { listItemPropType, createNewListItem } from './listItem';

export const ID = 'id';
export const TITLE = 'title';
export const IMAGE_URL = 'imageUrl';
export const DESCRIPTION = 'description';
export const TYPE = 'type';
export const LIST_ITEMS = 'listItems';
export const USER_ID = 'userId';
export const CREATED_AT = 'createdAt';
export const MODIFIED_AT = 'modifiedAt';
export const PRIVACY = 'privacy';

export const TYPE_OL = 'ol';
export const TYPE_UL = 'ul';

export const listPropType = {
    [ID]: PropTypes.string,
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
    [PRIVACY]: PropTypes.string,
    [USER_ID]: PropTypes.string,
    [CREATED_AT]: PropTypes.string,
    [MODIFIED_AT]: PropTypes.string,
};

const schema = {
    [TITLE]: '',
    [IMAGE_URL]: '',
    [DESCRIPTION]: '',
    [TYPE]: TYPE_OL,
    [LIST_ITEMS]: [],
    [PRIVACY]: 'public',
};

export function createNewList(options = {}) {
    return {
        ...schema,
        [LIST_ITEMS]: [createNewListItem()],
        ...options,
    };
}

export default schema;
