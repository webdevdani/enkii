import listItemSchema from 'constants/schemas/listItem';

/**
 * Accepts a list, and returns it with the list item
 * added, and the other items re-ordered
 * @param  {object} list Object following the list schema
 * @param  {number} addItemAtOrder  list item's order number
 * @return {object} list
 */
export default function addListItem(list, addItemAtOrder) {
    const { listItems } = list;
    const listItemCount = listItems.length;
    const newListItems = [];
    let orderCounter = 1;

    for (let i = 0; i < listItemCount; i++) {
        let item = listItems[i];

        if (addItemAtOrder && item.order === addItemAtOrder) {
            newListItems.push({
                ...listItemSchema,
                order: orderCounter,
            });

            orderCounter++;
        }

        newListItems.push({
            ...item,
            order: orderCounter,
        });

        orderCounter++;
    }

    // Add the new item to the end of list
    // if unspecified order or a higher order than our list
    if (!addItemAtOrder || addItemAtOrder > listItemCount) {
        newListItems.push({
            ...listItemSchema,
            order: orderCounter,
        });
    }

    return {
        ...list,
        listItems: newListItems,
    };
}

// return {
//     ...state,
//     [LIST.LIST_ITEMS]: [
//         ...state[LIST.LIST_ITEMS],
//         {
//             ...listItemSchema,
//             [LIST_ITEM.ORDER]: state[LIST.LIST_ITEMS].length + 1,
//         },
//     ],
// };
