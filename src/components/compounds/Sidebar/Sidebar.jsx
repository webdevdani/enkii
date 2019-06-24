import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { ACCOUNT } from 'constants/routes';
import { useAuthUser } from 'modules/AuthUser';
import UserAvatar, { SIZE_SMALL } from 'components/common/UserAvatar';

const SidebarWrapper = styled.aside`
    padding: ${props => `${props.theme.paddingM} ${props.theme.paddingXs}`};
    width: 100px;
    background-color: ${props => props.theme.borderColor};
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
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
        <SidebarWrapper>
            {props.sidebarContent && props.sidebarContent}
            <AvatarWrapper>
                <Link to={ACCOUNT}>
                    <UserAvatar photoUrl={user.photoURL} size={SIZE_SMALL} />
                    <p>Account</p>
                </Link>
            </AvatarWrapper>
        </SidebarWrapper>
    );
}

Sidebar.propTypes = {
    sidebarContent: PropTypes.node,
};

Sidebar.defaultProps = {
    sidebarContent: null,
};

export default Sidebar;
