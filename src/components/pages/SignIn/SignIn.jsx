import React from 'react';
import styled from 'styled-components/macro';

import withAuthorization from 'modules/Authorization';
import { DASHBOARD } from 'constants/routes';
import TopNavigation from 'components/templates/TopNavigation';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import formContainerStyles from 'styles/mixins/formContainer';
import SignInForm from 'components/compounds/SignInForm';

import ForgottenPasswordText from './ForgottenPasswordText';

const Wrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const SignIn = (props) => {
    return (
        <TopNavigation>
            <Wrapper>
                <Headline as="h1" size={SIZE_LARGE}>Sign In</Headline>
                <SignInForm />
                <ForgottenPasswordText />
            </Wrapper>
        </TopNavigation>
    );
}

const condition = authUser => !!authUser ? DASHBOARD : null;

export default withAuthorization(condition)(SignIn);
