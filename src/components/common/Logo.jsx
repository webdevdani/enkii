import React from 'react';
import { NavLink } from 'react-router-dom';

import { HOME } from 'constants/routes';

const Logo = (props) => {
    return (
        <NavLink exact to={HOME}>
            enkii
        </NavLink>
    );
}

export default Logo;
