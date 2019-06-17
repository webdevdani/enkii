import React, { useState } from 'react';

import Input from 'components/common/Input';
import Button from 'components/common/Button';

const SignInForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <Input
                label="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                type="email"
                autoComplete="username"
                required
            />
            <Input
                label="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                type="password"
                autoComplete="current-password"
                required
            />
            <div>
                <Button type="submit">Sign In</Button>
            </div>
        </form>
    );
};

export default SignInForm;
