import listSchema from 'constants/schemas/list';
import removeListItem from './utils/removeListItem';
import addListItem from './utils/addListItem';
import updateListItem from './utils/updateListItem';

export const CREATE_NEW_LIST = 'createList';
export const SET_LIST = 'setList';
export const UPDATE_LIST = 'updateList';
export const UPDATE_LIST_TITLE = 'updateListTitle';
export const ADD_LIST_ITEM = 'addItem';
export const DELETE_LIST_ITEM = 'deleteItem';
export const UPDATE_LIST_ITEM = 'updateItem';
export const SET_IS_DIRTY = 'setIsDirty';

// State Keys
export const IS_DIRTY = 'isDirty';
export const LIST = 'list';
export const LIST_ITEMS = 'listItems';

export const defaultState = {
    [IS_DIRTY]: false,
    [LIST]: null,
};

const listReducer = (state, action) => {
    switch (action.type) {
        case SET_LIST:
            return {
                ...state,
                [LIST]: action.value,
            };
        case CREATE_NEW_LIST:
            return {
                ...state,
                [LIST]: { ...listSchema },
            };
        case UPDATE_LIST:
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    ...action.value
                },
                [IS_DIRTY]: true,
            };
        case UPDATE_LIST_TITLE:
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    title: action.value,
                },
                [IS_DIRTY]: true,
            };
        case ADD_LIST_ITEM:
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    [LIST_ITEMS]: addListItem(state[LIST][LIST_ITEMS], action.order),
                },
                [IS_DIRTY]: true,
            };
        case DELETE_LIST_ITEM:
            // handling the last list item?
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    [LIST_ITEMS]: removeListItem(state[LIST][LIST_ITEMS], action.order),
                },
                [IS_DIRTY]: true,
            };
        case UPDATE_LIST_ITEM:
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    [LIST_ITEMS]: updateListItem(
                        state[LIST][LIST_ITEMS],
                        action.order,
                        action.value,
                    ),
                },
                [IS_DIRTY]: true,
            };
        case SET_IS_DIRTY:
            return {
                ...state,
                [IS_DIRTY]: action.value,
            };
        default:
            // throw new Error('No valid action passed');
            return state;
    }
};

/*

List editor needs to be able to:

add new list item
update list info
update list item info
delete list item

reorder list items <--------- (reuse update list item info?)


*/

export default listReducer;
