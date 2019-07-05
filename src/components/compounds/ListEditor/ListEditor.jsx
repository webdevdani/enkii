import React from 'react';
import PropTypes from 'prop-types';

import Loader from 'components/common/Loader';
import ListEditorForm from './components/ListEditorForm';
import useListEditor from './context/useListEditor';

const ListEditor = (props) => {
    const { list } = useListEditor();

    return list ?
        <ListEditorForm /> :
        <Loader />;
}

export default ListEditor;
