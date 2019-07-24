import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Button from 'components/common/Button';
import useListEditor from '../../context/useListEditor';
import {
    updateListItem,
    addListItem,
    deleteListItem,
} from '../../module/listReducer';
import ListItemRow from './ListItemRow';

const Sidebar = styled.aside`
    overflow: scroll;
    width: 25vw;
    min-width: 250px;
`;

const ButtonWrapper = styled.div`
    padding: 1rem;
`;

const ListItemForm = (props) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;
    const handleAddListItem = order => addListItem(dispatch, order);
    const handleRemoveListItem = id => deleteListItem(dispatch, id);
    const handleListItemChange = (id, updateInfo) => {
        updateListItem(dispatch, id, updateInfo);
    };

    return (
        <Sidebar>
            {!!listItems.length && listItems.map(item => (
                <ListItemRow
                    {...item}
                    key={item.id}
                    onChange={handleListItemChange}
                    addNewListItem={handleAddListItem}
                    removeListItem={handleRemoveListItem}
                    selectListItem={() => props.setActiveListItem(item.id)}
                    listType={list.type}
                />
            ))}
            <ButtonWrapper>
                <Button type="button" onClick={() => handleAddListItem()} secondary fullWidth>
                    Add a List Item
                </Button>
            </ButtonWrapper>
        </Sidebar>
    );
}

ListItemForm.propTypes = {
    setActiveListItem: PropTypes.func.isRequired,
};

export default ListItemForm;
