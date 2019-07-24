import React from 'react';

import Loader from 'components/common/Loader';
import FadeIn from 'components/common/FadeIn';
import ListEditorForm from './components/ListEditorForm';
import useListEditor from './context/useListEditor';

const ListEditor = (props) => {
    const { list } = useListEditor();

    return list ?
        (
            <FadeIn>
                <ListEditorForm />
            </FadeIn>
        ) : (
            <Loader fullscreen />
        );
}

export default ListEditor;
