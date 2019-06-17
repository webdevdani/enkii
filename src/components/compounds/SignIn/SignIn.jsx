import React from 'react';
import styled from 'styled-components/macro';

import Headline, { SIZE_LARGE } from 'components/common/Headline';
import formContainerStyles from 'styles/mixins/formContainer';
import SignInForm from './SignInForm';

const Wrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const SignIn = (props) => {
    return (
        <Wrapper>
            <Headline as="h1" size={SIZE_LARGE}>Sign In</Headline>
            <SignInForm />
        </Wrapper>
    );
}

export default SignIn;
