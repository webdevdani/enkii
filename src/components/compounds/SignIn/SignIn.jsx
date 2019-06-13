import React from 'react';
import styled from 'styled-components/macro';

import formContainerStyles from 'styles/mixins/formContainer';
import SignInForm from './SignInForm';

const Main = styled.main`
    ${props => formContainerStyles(props)}
`;

const SignIn = (props) => {
    return (
        <Main>
            <h1>Sign In</h1>
            <SignInForm />
        </Main>
    );
}

export default SignIn;
