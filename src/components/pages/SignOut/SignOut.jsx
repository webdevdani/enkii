import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import withAuthorization from 'modules/Authorization';
import { LANDING } from 'constants/routes';
import { useFirebase } from 'modules/Firebase';

const SignOut = (props) => {
    const firebase = useFirebase();

    useEffect(() => {
        firebase.doSignOut();
    }, []);

    return null;
}

const condition = authUser => !authUser ? LANDING : null;

export default withAuthorization(condition)(SignOut);
