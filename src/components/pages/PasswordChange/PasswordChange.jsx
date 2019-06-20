import React, { useState } from 'react';
import styled from 'styled-components/macro';

import withAuthorization from 'modules/Authorization';
import { SIGN_IN } from 'constants/routes';
import LeftSidebar from 'components/templates/LeftSidebar';
import formContainerStyles from 'styles/mixins/formContainer';

import ReauthenticateUser from './ReauthenticateUser';
import PasswordChangeForm from './PasswordChangeForm';

const FormWrapper = styled.div`
    ${props => formContainerStyles(props)}
`;

const PasswordChange = (props) => {
    const [hasReauthenticated, setHasReauthenticated] = useState(false);

    return (
        <LeftSidebar>
            <FormWrapper>
                {hasReauthenticated ?
                    <PasswordChangeForm /> :
                    <ReauthenticateUser
                        onReauthentication={() => setHasReauthenticated(true)}
                    />
                }
            </FormWrapper>
        </LeftSidebar>
    );
}

const condition = authUser => !authUser ? SIGN_IN : null;

export default withAuthorization(condition)(PasswordChange);
