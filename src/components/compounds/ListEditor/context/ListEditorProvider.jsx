import React, { useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useFirebase } from 'modules/Firebase';
import { useAuthUser } from 'modules/AuthUser';
import { useGrowlSystem } from 'components/compounds/GrowlSystem';
import listSchema from 'constants/schemas/list';
import listItemSchema from 'constants/schemas/listItem';
import ListEditorContext from './index';
import listReducer, { SET_LIST, SET_IS_DIRTY, defaultState } from '../module/listReducer';

const isTesting = false;

const ListEditorProvider = (props) => {
    const [state, dispatch] = useReducer(listReducer, defaultState);
    const showGrowlMessage = useGrowlSystem();
    const firebase = useFirebase();
    const authUser = useAuthUser();
    const { list, isDirty } = state;

    useEffect(() => {
        if (list) {
            // In case of redirect after creating new list,
            // dont re-fetch the list if we already have it
            return;
        }

        if (isTesting) {
            const newList = {
                ...listSchema,
                listItems: [
                    {
                        ...listItemSchema,
                        order: 1,
                    },
                    {
                        ...listItemSchema,
                        order: 2,
                    },
                ],
                id: props.id || 'test',
            };

            dispatch({
                type: SET_LIST,
                value: newList,
            });

            return;
        }

        if (props.id) {
            firebase.getList(props.id)
                .then((list) => {
                    if (list.exists) {
                        dispatch({
                            type: SET_LIST,
                            value: {
                                ...list.data(),
                                id: list.id,
                            },
                        });
                    } else {
                        props.onListNotExisting();
                    }
                })
                .catch((err) => {
                    err && err.message && showGrowlMessage(err.message);
                });
        } else {
            firebase.createNewList(authUser.uid)
                .then((list) => {
                    dispatch({
                        type: SET_LIST,
                        value: {
                            ...list.data(),
                            id: list.id,
                        },
                    });

                    props.onCreateNewList(list.id);
                })
                .catch((err) => {
                    err && err.message && showGrowlMessage(err.message);
                });
        }
    }, [props.id]);

    const saveList = () => {
        firebase.saveList(list.id, list)
            .then(() => {
                dispatch({
                    type: SET_IS_DIRTY,
                    value: false,
                });
            })
            .catch((err) => {
                err && err.message && showGrowlMessage(err.message);
            });
    };

    return (
        <ListEditorContext.Provider value={{
            list,
            dispatch,
            saveList,
            isDirty,
        }}>
            {props.children}
        </ListEditorContext.Provider>
    );
}

ListEditorProvider.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string,
    onCreateNewList: PropTypes.func,
    onListNotExisting: PropTypes.func.isRequired,
};

ListEditorProvider.defaultProps = {
    id: null,
    onCreateNewList: () => {},
};

export default ListEditorProvider;


