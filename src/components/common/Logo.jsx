import React from 'react';
import { NavLink } from 'react-router-dom';

import { HOME } from 'constants/routes';
import EnkiiLogo from 'assets/EnkiiLogo';

const Logo = (props) => {
    return (
        <NavLink exact to={HOME}>
            <EnkiiLogo />
        </NavLink>
    );
}

export default Logo;
