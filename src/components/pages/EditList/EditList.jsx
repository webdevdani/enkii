import React from 'react';
import PropTypes from 'prop-types';
import { generatePath } from 'react-router-dom';

import { SIGN_IN, EDIT_LIST } from 'constants/routes';
import withAuthorization from 'modules/Authorization';
import LeftSidebar from 'components/templates/LeftSidebar';
import ListEditor, { ListEditorProvider } from 'components/compounds/ListEditor';

const EditList = (props) => {
    return (
        <ListEditorProvider
            id={props.match.params.id}
            onCreateNewList={id => props.history.replace(generatePath(EDIT_LIST, { id }))}
        >
            <LeftSidebar
                sidebarContent={'hi'}
            >
                    <ListEditor />
            </LeftSidebar>
        </ListEditorProvider>
    );
}

// get list id from URL
// if making new list, replace path to have new id (history.replace)

EditList.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string,
        }),
    }),
    history: PropTypes.shape({
        replace: PropTypes.func.isRequired,
    }),
};

EditList.defaultProps = {
    match: { params: { id: null } },
};

// how to check if user has access to that list?
const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(EditList);
