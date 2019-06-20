import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { useFirebase } from 'modules/Firebase';
import Input from 'components/common/Input';
import Button from 'components/common/Button';
import WarningDialog from 'components/common/WarningDialog';

const EMAIL = 'email';
const PASSWORD = 'password';

const SignInForm = (props) => {
    const firebase = useFirebase();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [networkError, setNetworkError] = useState('');

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
        }

        // Submit the form, or show the inline validation
        if (!hasError) {
            firebase.doSignInWithEmailAndPassword(email, password)
                .then((user) => {
                    props.onFormSubmit();
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
                <Input
                    label="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    autoComplete="current-password"
                    error={errors[PASSWORD] || null}
                    required
                />
                <div>
                    <Button fullWidth type="submit">Sign In</Button>
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

SignInForm.propTypes = {
    onFormSubmit: PropTypes.func.isRequired,
};

SignInForm.defaultProps = {
    onFormSubmit: () => {},
};

export default SignInForm;
