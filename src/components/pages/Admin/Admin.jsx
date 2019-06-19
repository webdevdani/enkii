import React from 'react';

import withAuthorization from 'modules/Authorization';
import { APP, SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';

const Admin = (props) => {
    return (
        <LeftSidebar>
            <div>
                Admin
            </div>
        </LeftSidebar>
    );
}

const condition = authUser => {
    if (!authUser) {
        return SIGN_IN;
    } else if (authUser) {
        // check permission for admin
        return APP;
    }

    return null;
}

export default withAuthorization(condition)(Admin);
