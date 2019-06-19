import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';
import UserDataView from './UserDataView';

const AccountView = (props) => {
    return (
        <React.Fragment>
            <UserDataView />
            <Button secondary>Change Password</Button>
        </React.Fragment>
    );
}

export default AccountView;
