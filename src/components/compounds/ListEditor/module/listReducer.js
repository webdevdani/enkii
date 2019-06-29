import listSchema, * as LIST from './listSchema';
import listItemSchema, * as LIST_ITEM  from './listItemSchema';
import removeListItem from './utils/removeListItem';
import updateListItem from './utils/updateListItem';

export const CREATE_NEW_LIST = 'createList';
export const SET_LIST = 'setList';
export const UPDATE_LIST = 'updateList';
export const ADD_LIST_ITEM = 'addItem';
export const DELETE_LIST_ITEM = 'deleteItem';
export const UPDATE_LIST_ITEM = 'updateItem';

const listReducer = (state = null, action) => {
    switch (action.type) {
        case SET_LIST:
            return action.value;
        case CREATE_NEW_LIST:
            return { ...listSchema };
        case UPDATE_LIST:
            return {
                ...state,
                ...action.value,
            };
        case ADD_LIST_ITEM:
            return {
                ...state,
                [LIST.LIST_ITEMS]: [
                    ...state[LIST.LIST_ITEMS],
                    {
                        ...listItemSchema,
                        [LIST_ITEM.ORDER]: state[LIST.LIST_ITEMS].length + 1,
                    },
                ],
            };
        case DELETE_LIST_ITEM:
            // handling the last list item?
            return removeListItem(state, action.order);
        case UPDATE_LIST_ITEM:
            return updateListItem(state, action.order, action.value);
        default:
            throw new Error('No valid action passed');
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
