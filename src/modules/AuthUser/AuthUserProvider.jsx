import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useFirebase } from 'modules/Firebase';
import AuthUserContext from './context';

let listener;
const USER_KEY = 'authUser';

const AuthUserProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem(USER_KEY)));
    const firebase = useFirebase();

    useEffect(() => {
        // Listen for changes in the authenticated user from firebase
        listener = firebase.auth.onAuthStateChanged(
            authUser => {
                localStorage.setItem(USER_KEY, JSON.stringify(authUser));
                setAuthUser(authUser);
            },
            () => {
                localStorage.removeItem(USER_KEY);
                setAuthUser(null);
            },
        );

        // Clean up the auth listener
        return () => {
            listener();
        };
    }, [firebase]);

    return (
        <AuthUserContext.Provider value={authUser}>
            { children }
        </AuthUserContext.Provider>
    );
}

AuthUserProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AuthUserProvider;


