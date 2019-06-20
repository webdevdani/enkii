import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import { useFirebase } from 'modules/Firebase';
import { useGrowlSystem } from 'components/compounds/GrowlSystem';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import WarningDialog from 'components/common/WarningDialog';
import { SIGN_IN } from 'constants/routes';

const EMAIL = 'email';
const SUCCESS_MESSAGE = 'Check your email for a password recovery link';

const SignInForm = (props) => {
    const firebase = useFirebase();
    const showGrowlMessage = useGrowlSystem();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [networkError, setNetworkError] = useState('');

    const handleFormSubmit = (e) => {
        const newErrors = { ...errors };
        let hasError = false;

        e.preventDefault();

        if (!email) {
            newErrors[EMAIL] = 'A valid email is required';
            hasError = true;
        }

        // Submit the form, or show the inline validation
        if (!hasError) {
            firebase.doPasswordReset(email)
                .then(() => {
                    showGrowlMessage(SUCCESS_MESSAGE);
                    props.history.push(SIGN_IN);
                })
                .catch((error) => {
                    error && error.message && setNetworkError(error.message);
                });
        } else {
            setErrors(newErrors);
        }
    }

    return (
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <Input
                    label="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    autoComplete="username"
                    error={errors[EMAIL] || null}
                    required
                />
                <div>
                    <Button fullWidth type="submit">Reset your Password</Button>
                </div>
            </form>
            {networkError &&
                <WarningDialog
                    message={networkError}
                    onRequestClose={() => setNetworkError('')}
                />
            }
        </React.Fragment>
    );
};

export default withRouter(SignInForm);
