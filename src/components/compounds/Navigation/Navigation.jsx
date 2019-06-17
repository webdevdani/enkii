import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

import {
    LANDING,
    SIGN_IN,
    SIGN_UP,
} from 'constants/routes';
import gappedGroupStyles from 'styles/mixins/gappedGroup';

const NavigationList = styled.ul`
    ${props => gappedGroupStyles(props)}
    list-style: none;
    display: flex;
    flex-direction: row;
`;

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    padding: ${props => props.theme.paddingM};
`;

const Navigation = () => (
    <Nav>
        <NavLink exact to={LANDING}>enkii</NavLink>
        <NavigationList>
            <li>
                <NavLink to={SIGN_IN}>Sign In</NavLink>
            </li>
            <li>
                <NavLink to={SIGN_UP}>Sign Up</NavLink>
            </li>
        </NavigationList>
    </Nav>
);

export default Navigation;
