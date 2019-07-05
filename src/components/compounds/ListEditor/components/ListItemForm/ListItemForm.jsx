import React from 'react';
import PropTypes from 'prop-types';

import useListEditor from '../../context/useListEditor';
import { updateListItem } from '../../module/listActions';
import ListItemRow from './ListItemRow';

const ListItemForm = (props) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;

    const handleListItemChange = () => {
        debugger;
        // updateListItem(dispatch, id, itemInfo);
    };

    return (
        <section>
            {!!listItems.length && listItems.map(item => (
                <ListItemRow
                    label={item.order} // if ol vs url, change
                    onChange={handleListItemChange}
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
