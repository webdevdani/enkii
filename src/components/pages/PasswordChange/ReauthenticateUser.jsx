import React from 'react';
import PropTypes from 'prop-types';

import Headline from 'components/common/Headline';
import SignInForm from 'components/compounds/SignInForm';

const ReauthenticateUser = (props) => {
    return (
        <section>
            <Headline>Please reauthenticate to change your password</Headline>
            <SignInForm onFormSubmit={props.onReauthentication} />
        </section>
    );
}

ReauthenticateUser.propTypes = {
    onReauthentication: PropTypes.func.isRequired,
};

export default ReauthenticateUser;
