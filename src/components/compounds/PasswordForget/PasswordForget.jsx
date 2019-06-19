import React from 'react';
import styled from 'styled-components/macro';

import Headline, { SIZE_LARGE } from 'components/common/Headline';
import PasswordForgetForm from './PasswordForgetForm';
import formContainerStyles from 'styles/mixins/formContainer';

const Wrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const PasswordForget = () => (
    <Wrapper>
        <Headline as="h1" size={SIZE_LARGE}>Forgot your password?</Headline>
        <PasswordForgetForm />
    </Wrapper>
);

export default PasswordForget;
