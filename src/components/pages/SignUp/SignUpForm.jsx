import React, { useState } from 'react';

import { useFirebase } from 'modules/Firebase';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import WarningDialog from 'components/common/WarningDialog';

const EMAIL = 'email';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmPassword';

const SignUpForm = (props) => {
    const firebase = useFirebase();
    const [errors, setErrors] = useState({});
    const [networkError, setNetworkError] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFormSubmit = (e) => {
        const newErrors = { ...errors };
        let hasError = false;

        e.preventDefault();

        if (!email) {
            newErrors[EMAIL] = 'A valid email is required';
            hasError = true;
        }

        if (!password) {
            newErrors[PASSWORD] = 'A password is required';
            hasError = true;
        } else if (password !== confirmPassword) {
            newErrors[CONFIRM_PASSWORD] = 'Password must match password confirmation';
            hasError = true;
        }

        // Submit the form, or show the inline validation
        if (hasError) {
            setErrors(newErrors);
        } else {
            firebase.doCreateUserWithEmailAndPassword(email, password)
                .then((authUser) => {
                    if (authUser && authUser.user) {
                        const displayName = name || email.substring(0, email.indexOf('@'));
                        authUser.user.updateProfile({ displayName });
                    }
                })
                .catch((error) => {
                    error && error.message && setNetworkError(error.message);
                });
        }
    };

    return (
        <React.Fragment>
            <form onSubmit={handleFormSubmit}>
                <Input
                    label="Display Name (Optional)"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    type="text"
                />
                <Input
                    label="E-mail"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    autoComplete="email"
                    error={errors[EMAIL] || null}
                    required
                />
                <Input
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    autoComplete="new-password"
                    error={errors[PASSWORD] || null}
                    required
                />
                <Input
                    label="Confirm Password"
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                    type="password"
                    error={errors[CONFIRM_PASSWORD] || null}
                    required
                />
                <div>
                    <Button fullWidth type="submit">Sign Up</Button>
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

// TO-DO: If error code "auth/email-already-in-use", pass button to go to password reset

export default SignUpForm;
