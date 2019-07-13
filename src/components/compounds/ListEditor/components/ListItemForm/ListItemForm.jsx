import React from 'react';
import PropTypes from 'prop-types';

import useListEditor from '../../context/useListEditor';
import {
    updateListItem,
    addListItem,
    deleteListItem,
} from '../../module/listActions';
import ListItemRow from './ListItemRow';

const ListItemForm = (props) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;
    const handleAddListItem = order => addListItem(dispatch, order);
    const handleRemoveListItem = order => deleteListItem(dispatch, order);
    const handleListItemChange = (order, updateInfo) => {
        updateListItem(dispatch, order, updateInfo);
    };

    return (
        <section>
            {!!listItems.length && listItems.map(item => (
                <ListItemRow
                    id={item.order}
                    key={item.order}
                    label={item.order} // if ol vs url, change
                    onChange={handleListItemChange}
                    addNewListItem={handleAddListItem}
                    removeListItem={handleRemoveListItem}
                    {...item}
                />
            ))}
        </section>
    );
}

ListItemForm.propTypes = {

};

ListItemForm.defaultProps = {

};

export default ListItemForm;
