/**
 * Accepts a list, and returns it with the list item
 * removed, and the other items re-ordered
 * @param  {object} list Object following the list schema
 * @param  {number} removeItemAtOrder  list item's order number
 * @return {object} list
 */
export default function removeListItem(listItems, removeItemAtOrder) {
    const listItemCount = listItems.length;
    const newListItems = [];
    let orderCounter = 1;

    for (let i = 0; i < listItemCount; i++) {
        const item = listItems[i];

        if (item.order !== removeItemAtOrder) {
            newListItems.push({
                ...item,
                order: orderCounter,
            });

            orderCounter++;
        }
    }

    return newListItems;
}
