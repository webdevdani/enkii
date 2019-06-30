import React, { useState } from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import NewListSidebarButton from './NewListSidebarButton';

const Home = (props) => {

    return (
        <LeftSidebar
            sidebarContent={
                <NewListSidebarButton onClick={() => {}}/>
            }
        >
            <h1>home</h1>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
