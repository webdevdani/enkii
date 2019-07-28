import { useEffect } from 'react';

import withAuthorization from 'modules/Authorization';
import { HOME } from 'constants/routes';
import { useFirebase } from 'modules/Firebase';

const SignOut = (props) => {
    const firebase = useFirebase();

    useEffect(() => {
        firebase.doSignOut();
    }, [firebase]);

    return null;
}

const condition = authUser => !authUser ? HOME : null;

export default withAuthorization(condition)(SignOut);
