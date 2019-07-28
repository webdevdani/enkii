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
    position: sticky;
    top: 0;
    width: 100%;
    background-color: ${props => props.theme.contentBackground};
    border-bottom: ${props => props.theme.baseBorder};
    border-top: 4px solid ${props => props.theme.accentColor};
    padding: ${props => `${props.theme.paddingS} ${props.theme.paddingM}`};
`;

const ContentContainer = styled.div`
    max-width: ${props => props.theme.maxContentWidth};
    margin: auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Navigation = (props) => {
    const authUser = useAuthUser();

    return (
        <Nav>
            <ContentContainer>
                <Logo />
                <NavigationList>
                    {authUser ?
                        <LoggedInNavActions /> :
                        <LoggedOutNavActions />
                    }
                    {props.children}
                </NavigationList>
            </ContentContainer>
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
