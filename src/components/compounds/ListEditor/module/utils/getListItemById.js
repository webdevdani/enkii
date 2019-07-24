import { ID } from 'constants/schemas/listItem';

/**
 * Gets the list item with the passed id
 * @param  {array of objects}   listItems
 * @param  {string}      id
 * @return {object}             List item's value
 */
export default function getListItemById(listItems, id) {
    const listItemCount = listItems.length;
    let selectedListItem;

    for (let i = 0; i < listItemCount; i++) {
        const item = listItems[i];

        if (item[ID] === id) {
            selectedListItem = item;
            break;
        }
    }

    return selectedListItem;
}
