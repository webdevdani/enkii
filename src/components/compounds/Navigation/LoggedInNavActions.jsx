import React from 'react';
import { NavLink } from 'react-router-dom';

import Button, { SIZE_SMALL } from 'components/common/Button';
import { DASHBOARD } from 'constants/routes';

const LoggedOutNavActions = () => {
    return (
        <li>
            <NavLink to={DASHBOARD}>
                <Button secondary size={SIZE_SMALL}>
                    Go to your Dashboard
                </Button>
            </NavLink>
        </li>
    );
}

export default LoggedOutNavActions;
