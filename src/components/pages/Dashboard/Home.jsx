import React from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import NewListSidebarButton from './NewListSidebarButton';
import ListDashboard from './ListDashboard';

const Home = (props) => {

    return (
        <LeftSidebar
            sidebarContent={<NewListSidebarButton />}
        >
            <ListDashboard />
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
