import React from 'react';
import styled from 'styled-components/macro';

import withAuthorization from 'modules/Authorization';
import { DASHBOARD } from 'constants/routes';
import TopNavigation from 'components/templates/TopNavigation';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import PasswordForgetForm from './PasswordForgetForm';
import formContainerStyles from 'styles/mixins/formContainer';

const Wrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const PasswordForget = () => (
    <TopNavigation>
        <Wrapper>
            <Headline as="h1" size={SIZE_LARGE}>Forgot your password?</Headline>
            <PasswordForgetForm />
        </Wrapper>
    </TopNavigation>
);

const condition = authUser => !!authUser ? DASHBOARD : null;

export default withAuthorization(condition)(PasswordForget);
