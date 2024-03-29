import { ORDER } from 'constants/schemas/listItem';

/**
 * Gets the list item with the passed order
 * @param  {array of objects}   listItems
 * @param  {string}      order
 * @return {object}             List item's value
 */
export default function getListItemByOrder(listItems, order) {
    const listItemCount = listItems.length;
    let selectedListItem;

    for (let i = 0; i < listItemCount; i++) {
        const item = listItems[i];

        if (item[ORDER] === order) {
            selectedListItem = item;
            break;
        }
    }

    return selectedListItem;
}
