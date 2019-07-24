import { ID } from 'constants/schemas/listItem';

export default function updateListItem(listItems, id, update = {}) {
    const listItemCount = listItems.length;
    const newListItems = [];

    for (let i = 0; i < listItemCount; i++) {
        let item = listItems[i];

        if (item[ID] === id) {
            item = {
                ...item,
                ...update,
            };
        }

        newListItems.push(item);
    }

    return newListItems;
}

/* after getting id from firebase, normalize list? Be more performant to update
by id, than recreating the object each time */
