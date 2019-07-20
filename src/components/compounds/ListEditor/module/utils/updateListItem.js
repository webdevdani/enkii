export default function updateListItem(list, listItemOrder, listItemUpdate) {
    const { listItems } = list;
    const listItemCount = listItems.length;
    const newListItems = [];

    for (let i = 0; i < listItemCount; i++) {
        let item = listItems[i];

        if (item.order === listItemOrder) {
            item = {
                ...item,
                ...listItemUpdate,
            };
        }

        newListItems.push(item);
    }

    return {
        ...list,
        listItems: newListItems,
    };
}

/* after getting id from firebase, normalize list? Be more performant to update
by id, than recreating the object each time */
