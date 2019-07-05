import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
    addListItem,
    updateListItem,
    updateList,
} from '../module/listActions';
import useListEditor from '../context/useListEditor';

import TitleTopbar from './TitleTopbar';
import ListItemForm from './ListItemForm';

const ListEditorForm = () => {
    const { dispatch, list } = useListEditor();
    const { listItems, ...listProps } = list;
    // useState for which list item is being edited

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(list);
        }}>
            <TitleTopbar />
            <ListItemForm />
        </form>
    );
}

export default ListEditorForm;
