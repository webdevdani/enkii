import React from 'react';
import PropTypes from 'prop-types';

import {
    addListItem,
    updateListItem,
    updateList,
} from '../module/listActions';
import useListEditor from '../useListEditor';

import ListSettingsFormSection from './ListSettingsFormSection';
import ListItemsFormSection from './ListItemsFormSection';

const ListEditorForm = () => {
    const { dispatch, list } = useListEditor();
    const { listItems, ...listProps } = list;

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            console.log(list);
        }}>
            <ListSettingsFormSection
                onChange={info => updateList(dispatch, info)}
                {...listProps}
            />
            <ListItemsFormSection
                onChange={(order, info) => updateListItem(dispatch, order, info)}
                addListItem={() => addListItem(dispatch)}
                listItems={listItems}
            />
        </form>
    );
}

export default ListEditorForm;
