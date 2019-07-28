import React from 'react';
import { NavLink } from 'react-router-dom';

import Button, { SIZE_SMALL } from 'components/common/Button';
import {
    SIGN_IN,
    SIGN_UP,
} from 'constants/routes';

const LoggedOutNavActions = (props) => {

    return (
        <React.Fragment>
            <li>
                <NavLink to={SIGN_IN}>
                    <Button secondary size={SIZE_SMALL}>
                        Sign In
                    </Button>
                </NavLink>
            </li>
            <li>
                <NavLink to={SIGN_UP}>
                    <Button size={SIZE_SMALL}>
                        Sign Up
                    </Button>
                </NavLink>
            </li>
        </React.Fragment>
    );
}

export default LoggedOutNavActions;
