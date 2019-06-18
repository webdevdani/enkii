import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

import { LANDING } from 'constants/routes';
import { FirebaseContext } from 'modules/Firebase';

const SignOut = (props) => {
    const firebase = useContext(FirebaseContext);

    useEffect(() => {
        firebase.doSignOut();
    }, []);

    return (
        <Redirect to={LANDING} />
    );
}

export default SignOut;
