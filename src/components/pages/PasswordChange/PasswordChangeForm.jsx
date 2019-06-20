import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { ACCOUNT } from 'constants/routes';

import { useAuthUser } from 'modules/AuthUser';
import { useGrowlSystem } from 'components/compounds/GrowlSystem';
import Headline from 'components/common/Headline';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import WarningDialog from 'components/common/WarningDialog';

const NEW_PASSWORD = 'newPassword';
const SUCCESS_MESSAGE = 'Successfully updated your password.';

const PasswordChangeForm = (props) => {
    const user = useAuthUser();
    const showGrowlMessage = useGrowlSystem();
    const [errors, setErrors] = useState({});
    const [networkError, setNetworkError] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleFormSubmit = (e) => {
        const newErrors = { ...errors };
        let hasError = false;

        e.preventDefault();

        if (!newPassword) {
            newErrors[NEW_PASSWORD] = "New password is required";
            hasError = true;
        }

        if (hasError) {
            setErrors(newErrors);
        } else {
            user.updatePassword(newPassword)
                .then(() => {
                    showGrowlMessage(SUCCESS_MESSAGE);
                    props.history.push(ACCOUNT);
                })
                .catch((error) => {
                    error && error.message && setNetworkError(error.message);
                });

        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <Headline>Change your Password</Headline>
                <Input
                    label="Account E-mail"
                    value={user.email}
                    onChange={() => {}}
                    type="text"
                    autoComplete="username"
                    readOnly
                />
                <Input
                    label="New Password"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    type="password"
                    error={errors[NEW_PASSWORD] || null}
                    autoComplete="new-password"
                    required
                />
                <Button fullWidth>Change Password</Button>
            </form>
            {networkError &&
                <WarningDialog
                    message={networkError}
                    onRequestClose={() => setNetworkError('')}
                />
            }
        </React.Fragment>
    );
}

export default withRouter(PasswordChangeForm);
