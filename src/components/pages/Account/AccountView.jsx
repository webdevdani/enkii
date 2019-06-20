import React from 'react';
import { Link } from 'react-router-dom';

import { PASSWORD_CHANGE } from 'constants/routes';

import Button from 'components/common/Button';
import UserDataView from './UserDataView';

const AccountView = (props) => {
    return (
        <React.Fragment>
            <UserDataView />
            <Link to={PASSWORD_CHANGE}>
                <Button secondary>Change Password</Button>
            </Link>
        </React.Fragment>
    );
}

export default AccountView;
