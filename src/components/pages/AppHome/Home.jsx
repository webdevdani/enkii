import React, { useState } from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import NewListSidebarButton from './NewListSidebarButton';

import ListEditor from 'components/compounds/ListEditor';

const Home = (props) => {

    return (
        <LeftSidebar
            sidebarContent={
                <NewListSidebarButton onClick={() => {}}/>
            }
        >
            <div>
                <ListEditor listItems={[{}, {}, {}]} />
            </div>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
