import deleteListItemHelper from './utils/deleteListItem';
import addListItemHelper from './utils/addListItem';
import updateListItemHelper from './utils/updateListItem';

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
                    [LIST_ITEMS]: addListItemHelper(state[LIST][LIST_ITEMS], action.order),
                },
                [IS_DIRTY]: true,
            };
        case DELETE_LIST_ITEM:
            // handling the last list item?
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    [LIST_ITEMS]: deleteListItemHelper(state[LIST][LIST_ITEMS], action.id),
                },
                [IS_DIRTY]: true,
            };
        case UPDATE_LIST_ITEM:
            return {
                ...state,
                [LIST]: {
                    ...state[LIST],
                    [LIST_ITEMS]: updateListItemHelper(
                        state[LIST][LIST_ITEMS],
                        action.id,
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
            return state;
    }
};

export const updateList = (dispatch, listInfo = {}) => {
    dispatch({
        type: UPDATE_LIST,
        value: listInfo,
    });
};

export const updateListTitle = (dispatch, title = '') => {
    dispatch({
        type: UPDATE_LIST_TITLE,
        value: title,
    });
};

export const addListItem = (dispatch, itemOrder) => {
    dispatch({
        type: ADD_LIST_ITEM,
        order: itemOrder,
    });
};

export const deleteListItem = (dispatch, id) => {
    dispatch({
        type: DELETE_LIST_ITEM,
        id: id,
    });
};

export const updateListItem = (dispatch, id, update = {}) => {
    dispatch({
        type: UPDATE_LIST_ITEM,
        id: id,
        value: update,
    });
};

export default listReducer;
