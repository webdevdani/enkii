import React, { useState } from 'react';

import { useFirebase } from 'modules/Firebase';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const EMAIL = 'email';
const PASSWORD = 'password';

const SignInForm = (props) => {
    const firebase = useFirebase();
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            firebase.doSignInWithEmailAndPassword(email, password);
            // TODO: handle any errors back from firebase
        } else {
            setErrors(newErrors);
        }
    }

    return (
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
    );
};

export default SignInForm;
