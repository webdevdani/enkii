import { useEffect } from 'react';

import withAuthorization from 'modules/Authorization';
import { LANDING } from 'constants/routes';
import { useFirebase } from 'modules/Firebase';

const SignOut = (props) => {
    const firebase = useFirebase();

    useEffect(() => {
        firebase.doSignOut();
    }, [firebase]);

    return null;
}

const condition = authUser => !authUser ? LANDING : null;

export default withAuthorization(condition)(SignOut);
