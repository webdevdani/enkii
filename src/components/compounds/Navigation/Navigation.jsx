import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import gappedGroupStyles from 'styles/mixins/gappedGroup';
import { useAuthUser } from 'modules/AuthUser';
import Logo from 'components/common/Logo';
import LoggedOutNavActions from './LoggedOutNavActions';
import LoggedInNavActions from './LoggedInNavActions';

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

const Navigation = (props) => {
    const authUser = useAuthUser();

    return (
        <Nav>
            <Logo />
            <NavigationList>
                {authUser ?
                    <LoggedInNavActions /> :
                    <LoggedOutNavActions />
                }
                {props.children}
            </NavigationList>
        </Nav>
    );
}

Navigation.propTypes = {
    children: PropTypes.node,
};

Navigation.defaultProps = {
    children: null,
};

export default Navigation;
