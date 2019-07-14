import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import {
    addListItem,
    updateListItem,
    updateList,
} from '../module/listActions';
import useListEditor from '../context/useListEditor';

import TitleTopbar from './TitleTopbar';
import ListItemForm from './ListItemForm';
import MainEditingSection from './MainEditingSection';

const EditorLayout = styled.div`
    display: flex;
    width: 100%;
    flex-grow: 1;
`;

const EditorForm = styled.form`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const ListEditorForm = () => {
    const { dispatch, list } = useListEditor();
    const { listItems, ...listProps } = list;
    const [activeListItem, setActiveListItem] = useState(null);

    return (
        <EditorForm
            onSubmit={(e) => {
                e.preventDefault();
                console.log(list);
            }}
        >
            <TitleTopbar />
            <EditorLayout>
                <ListItemForm />
                <MainEditingSection activeListItem={activeListItem} />
            </EditorLayout>
        </EditorForm>
    );
}

export default ListEditorForm;
