import React, { useState } from 'react';

import { useFirebase } from 'modules/Firebase';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import WarningDialog from 'components/common/WarningDialog';

const EMAIL = 'email';

const SignInForm = (props) => {
    const firebase = useFirebase();
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
                    setEmail(''); // empty the form
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
                    label="E-mail"
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

export default SignInForm;
