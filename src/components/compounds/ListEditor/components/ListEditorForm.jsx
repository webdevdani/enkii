import React, { useState } from 'react';
import styled from 'styled-components/macro';

import useListEditor from '../context/useListEditor';

import TitleTopbar from './TitleTopbar';
import ListItemForm from './ListItemForm';
import MainEditingSection from './MainEditingSection';
import UnsavedChangesDialog from './UnsavedChangesDialog';

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
    const { list, saveList, isDirty } = useListEditor();
    const [activeListItem, setActiveListItem] = useState(null);

    return (
        <EditorForm
            onSubmit={(e) => {
                e.preventDefault();
                console.log(list);
                saveList();
            }}
        >
            <TitleTopbar
                setActiveListItem={setActiveListItem}
            />
            <EditorLayout>
                <ListItemForm
                    setActiveListItem={setActiveListItem}
                />
                <MainEditingSection
                    activeListItem={activeListItem}
                    setActiveListItem={setActiveListItem}
                />
            </EditorLayout>
            <UnsavedChangesDialog when={isDirty} saveList={saveList} />
        </EditorForm>
    );
}

export default ListEditorForm;
