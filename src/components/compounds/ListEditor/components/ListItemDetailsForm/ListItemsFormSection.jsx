import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import { listPropType, LIST_ITEMS } from 'constants/schemas/list';
import ListItemSection from './ListItemSection';

const ListItemsFormSection = (props) => {
    return (
        <section name="list items">
            {props.listItems && props.listItems.map(listItem => (
                <ListItemSection
                    onChange={(info) => props.onChange(listItem.order, info)}
                    key={listItem.order}
                    {...listItem}
                />
            ))}
            <Button
                onClick={props.addListItem}
                type="button"
            >
                Add Item
            </Button>
        </section>
    );
}

ListItemsFormSection.propTypes = {
    listItems: listPropType[LIST_ITEMS],
    onChange: PropTypes.func.isRequired,
    addListItem: PropTypes.func.isRequired,
};

export default ListItemsFormSection;
