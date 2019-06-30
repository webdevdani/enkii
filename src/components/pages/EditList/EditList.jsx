import React from 'react';
import PropTypes from 'prop-types';

import withAuthorization from 'modules/Authorization';
import ListEditor, { ListEditorProvider } from 'components/compounds/ListEditor';

const EditList = (props) => {
    return (
        <ListEditorProvider
            id={props.match.params.id}
            onCreateNewList={() => {}}
        >
            <ListEditor />
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
};

EditList.defaultProps = {
    match: { params: { id: null } },
};

// how to check if user has access to that list?
const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(EditList);
