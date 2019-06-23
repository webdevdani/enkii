import React from 'react';
import PropTypes from 'prop-types';

import ListItemForm from './components/ListItemForm';

const ListEditor = (props) => {
    return (
        <form>
            {props.listItems.map((listItem, order) => (
                <ListItemForm order={order + 1} />
            ))}
        </form>
    );
}

ListEditor.propTypes = {
    listItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ListEditor.defaultProps = {

};

export default ListEditor;
