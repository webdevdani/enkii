import React from 'react';
import styled from 'styled-components/macro';

import Headline, { SIZE_LARGE } from 'components/common/Headline';
import formContainerStyles from 'styles/mixins/formContainer';
import SignUpForm from './SignUpForm';
import ExistingAccountText from './ExistingAccountText';

const Wrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const SignUp = (props) => {
    return (
        <Wrapper>
            <Headline as="h1" size={SIZE_LARGE}>Sign Up</Headline>
            <SignUpForm />
            <ExistingAccountText />
        </Wrapper>
    );
}

export default SignUp;
