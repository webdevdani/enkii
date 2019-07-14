/**
 * Gets the list item with the passed order value
 * @param  {array of objects}   listItems
 * @param  {string|number}      order
 * @return {object}             List item's value
 */
export default function getListItemByOrder(listItems, order) {
    const listItemCount = listItems.length;
    let selectedListItem;

    for (let i = 0; i < listItemCount; i++) {
        const item = listItems[i];

        if (item.order !== order) {
            selectedListItem = item;
            break;
        }
    }

    return selectedListItem;
}
