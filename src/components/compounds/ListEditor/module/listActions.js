import {
    UPDATE_LIST,
    ADD_LIST_ITEM,
    DELETE_LIST_ITEM,
    UPDATE_LIST_ITEM,
} from './listReducer';

export const updateList = (dispatch, listInfo = {}) => {
    dispatch({
        type: UPDATE_LIST,
        value: listInfo,
    });
};

export const addListItem = (dispatch) => {
    dispatch({
        type: ADD_LIST_ITEM,
    });
};

export const deleteListItem = (dispatch, itemOrder) => {
    dispatch({
        type: DELETE_LIST_ITEM,
        order: itemOrder,
    });
};

export const updateListItem = (dispatch, itemOrder, itemInfo = {}) => {
    dispatch({
        type: UPDATE_LIST_ITEM,
        order: itemOrder,
        value: itemInfo,
    });
};