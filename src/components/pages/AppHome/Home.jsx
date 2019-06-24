import React, { useState } from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import NewListSidebarButton from './NewListSidebarButton';

import ListEditor, { ListEditorProvider } from 'components/compounds/ListEditor';

const Home = (props) => {

    return (
        <LeftSidebar
            sidebarContent={
                <NewListSidebarButton onClick={() => {}}/>
            }
        >
            <ListEditorProvider>
                <ListEditor />
            </ListEditorProvider>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
