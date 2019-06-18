import React, { useState } from 'react';

import { useFirebase } from 'modules/Firebase';
import Input from 'components/common/Input';
import Button from 'components/common/Button';

const EMAIL = 'email';
const PASSWORD = 'password';
const CONFIRM_PASSWORD = 'confirmPassword';

const SignUpForm = (props) => {
    const firebase = useFirebase();
    const [errors, setErrors] = useState({});
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
                .then();
            // TODO: handle any errors back from firebase
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <Input
                label="Display Name"
                value={name}
                onChange={e => setName(e.target.value)}
                type="text"
            />
            <Input
                label="E-mail (Required)"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                error={errors[EMAIL] || null}
                required
            />
            <Input
                label="Password (Required)"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
                error={errors[PASSWORD] || null}
                required
            />
            <Input
                label="Confirm Password (Required)"
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
    );
};

export default SignUpForm;
