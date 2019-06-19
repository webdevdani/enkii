import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { SIGN_OUT } from 'constants/routes';

import Button from 'components/common/Button';
import gappedGroupStyles from 'styles/mixins/gappedGroup';

const Header = styled.header`
    display: flex;
`;

const ButtonGroup = styled.div`
    ${props => gappedGroupStyles(props)}
    margin-left: auto;
`;

const AccountHeader = ({isEditingAccount, setIsEditingAccount }) => {
    return (
        <Header>
            <ButtonGroup>
                <Button secondary onClick={() => setIsEditingAccount(!isEditingAccount)}>
                    {isEditingAccount ? 'Cancel' : 'Edit Profile'}
                </Button>
                <Link to={SIGN_OUT}>
                    <Button>Sign Out</Button>
                </Link>
            </ButtonGroup>
        </Header>
    );
}

AccountHeader.propTypes = {
    isEditingAccount: PropTypes.bool.isRequired,
    setIsEditingAccount: PropTypes.func.isRequired,
};

export default AccountHeader;
