import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useFirebase } from 'modules/Firebase';
import { useGrowlSystem } from 'components/compounds/GrowlSystem';
import ListEditorContext from '../context';
import listReducer, { SET_LIST } from '../module/listReducer';

const ListEditorProvider = (props) => {
    const [list, dispatch] = useReducer(listReducer);
    const showGrowlMessage = useGrowlSystem();
    const firebase = useFirebase();

    useEffect(() => {
        // fetch list if id passed, create new one if not
        if (!props.id) {
            firebase.createNewList()
                .then((list) => {
                    dispatch({ type: SET_LIST, value: list.data() });
                })
                .catch((err) => {
                    err && err.message && showGrowlMessage(err.message);
                });
        } else {
            firebase.getList(props.id)
                .then((list) => {
                    dispatch({ type: SET_LIST, value: list.data() });
                })
                .catch((err) => {
                    err && err.message && showGrowlMessage(err.message);
                });
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


