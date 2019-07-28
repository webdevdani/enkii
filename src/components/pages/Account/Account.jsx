import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN, DASHBOARD } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import AccountHeader from './AccountHeader';
import AccountView from './AccountView';
import UserDataForm from './UserDataForm';

const Account = (props) => {
    const [isEditingAccount, setIsEditingAccount] = useState(false);

    return (
        <LeftSidebar
            sidebarContent={
                <Link to={DASHBOARD}>Home</Link>
            }
        >
            <AccountHeader
                isEditingAccount={isEditingAccount}
                setIsEditingAccount={setIsEditingAccount}
            />
            {isEditingAccount ?
                <UserDataForm onSave={() => setIsEditingAccount(false)}/> :
                <AccountView />
            }
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(Account);
