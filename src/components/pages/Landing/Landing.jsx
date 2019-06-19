import React from 'react';

import withAuthorization from 'modules/Authorization';
import { APP } from 'constants/routes';
import TopNavigation from 'components/templates/TopNavigation';

const Landing = (props) => {
    return (
        <TopNavigation>
            <h1>Landing</h1>
        </TopNavigation>
    );
}

const condition = authUser => !!authUser ? APP : null;

export default withAuthorization(condition)(Landing);
