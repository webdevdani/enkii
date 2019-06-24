import React from 'react';
import PropTypes from 'prop-types';


import { addListItem, updateListItem } from '../module/listActions';
import useListEditor from '../useListEditor';
import ListItemForm from './ListItemForm';

const ListEditorForm = (props) => {
    const { dispatch } = useListEditor();

    return (
        <form>
            {props.listItems.map(listItem => (
                <ListItemForm
                    onChange={(info) => updateListItem(dispatch, listItem.order, info)}
                    key={listItem.order}
                    {...listItem}
                />
            ))}
            <button
                onClick={() => addListItem(dispatch)}
                type="button"
            >
                Add Item
            </button>
        </form>
    );
}

ListEditorForm.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ListEditorForm.defaultProps = {

};

export default ListEditorForm;
