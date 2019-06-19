import React from 'react';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';

const Home = (props) => {
    return (
        <LeftSidebar>
            <div>
                Home
            </div>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Home);
