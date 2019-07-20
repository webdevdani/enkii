import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ACCOUNT } from 'constants/routes';
import { useAuthUser } from 'modules/AuthUser';
import UserAvatar, { SIZE_SMALL } from 'components/common/UserAvatar';

const sharedSidebarStyles = `
    width: 100px;
    min-width: 100px;
    height: 100vh;
`;

const SidebarWrapper = styled.aside`
    padding: ${props => `${props.theme.paddingM} ${props.theme.paddingXs}`};
    background-color: ${props => props.theme.borderColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    ${sharedSidebarStyles}
`;

const SidebarSpaceHolder = styled.div`
    ${sharedSidebarStyles}
`;

const AvatarWrapper = styled.div`
    margin-top: auto;
    text-align: center;

    > a {
        text-decoration: none;
        font-size: 0.5rem;
        color: ${props => props.theme.subTextColor};
    }
`;

const Sidebar = (props) => {
    const user = useAuthUser();

    return (
        <SidebarSpaceHolder>
            <SidebarWrapper>
                {props.sidebarContent && props.sidebarContent}
                <AvatarWrapper>
                    <Link to={ACCOUNT}>
                        <UserAvatar photoUrl={user.photoURL} size={SIZE_SMALL} />
                        <p>Account</p>
                    </Link>
                </AvatarWrapper>
            </SidebarWrapper>
        </SidebarSpaceHolder>
    );
}

Sidebar.propTypes = {
    sidebarContent: PropTypes.node,
};

Sidebar.defaultProps = {
    sidebarContent: null,
};

export default Sidebar;
