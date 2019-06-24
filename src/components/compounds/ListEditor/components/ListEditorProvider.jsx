import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import ListEditorContext from '../context';
import listReducer, {
    CREATE_NEW_LIST,
    SET_LIST,
} from '../module/listReducer';

const ListEditorProvider = (props) => {
    const [list, dispatch] = useReducer(listReducer);

    useEffect(() => {
        // fetch list if props.id, create new one if not
        if (!props.id) {
            dispatch({ type: CREATE_NEW_LIST });
        }
    }, [props.id]);

    return (
        <ListEditorContext.Provider value={{ list, dispatch }}>
            {props.children}
        </ListEditorContext.Provider>
    );
}

ListEditorProvider.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
};

ListEditorProvider.defaultProps = {
    id: null,
};

export default ListEditorProvider;


