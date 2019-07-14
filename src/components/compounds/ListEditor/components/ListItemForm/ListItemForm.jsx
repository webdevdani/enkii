import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useListEditor from '../../context/useListEditor';
import {
    updateListItem,
    addListItem,
    deleteListItem,
} from '../../module/listActions';
import ListItemRow from './ListItemRow';

const Sidebar = styled.aside`
    overflow: scroll;
    width: 25vw;
    min-width: 250px;
`;

const ListItemForm = (props) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;
    const handleAddListItem = order => addListItem(dispatch, order);
    const handleRemoveListItem = order => deleteListItem(dispatch, order);
    const handleListItemChange = (order, updateInfo) => {
        updateListItem(dispatch, order, updateInfo);
    };

    return (
        <Sidebar>
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
        </Sidebar>
    );
}

ListItemForm.propTypes = {

};

ListItemForm.defaultProps = {

};

export default ListItemForm;
