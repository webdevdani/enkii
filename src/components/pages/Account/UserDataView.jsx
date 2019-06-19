import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import { useAuthUser } from 'modules/AuthUser';
import Headline, { SIZE_LARGE, SIZE_SMALL } from 'components/common/Headline';
import Button from 'components/common/Button';
import UserAvatar from 'components/common/UserAvatar';

const Section = styled.section`
    padding: ${props => props.theme.paddingL} 0;
`;

const TopSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: ${props => props.theme.paddingM};
`;

const UserDataView = (props) => {
    const user = useAuthUser();
    console.log(user);

    return (
        <Section>
            <TopSection>
                <UserAvatar photoUrl={user.photoURL} />
                <div style={{ marginLeft: '1rem' }}>
                    <Headline as="h1" size={SIZE_LARGE}>{user.displayName}</Headline>
                    <Headline as="h2" size={SIZE_SMALL}>{user.email}</Headline>
                </div>
            </TopSection>
        </Section>
    );
}

UserDataView.propTypes = {

};

UserDataView.defaultProps = {

};

export default UserDataView;
