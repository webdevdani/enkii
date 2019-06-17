import React, { useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

const SignUpForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    return (
        <form>
            <Input
                label="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                autoComplete="email"
                required
            />
            <Input
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                autoComplete="new-password"
                required
            />
            <Input
                label="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                required
            />
            <div>
                <Button fullWidth type="submit">Sign Up</Button>
            </div>
        </form>
    );
};

export default SignUpForm;
