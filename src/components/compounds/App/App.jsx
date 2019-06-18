import React from 'react';

import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';
import Router from 'components/compounds/Router';
import Firebase, { FirebaseContext } from 'modules/Firebase';
import AuthUserProvider from 'modules/AuthUser';

const firebaseInstance = new Firebase();

const App = (props) => (
    <ThemeProvider>
        <FirebaseContext.Provider value={firebaseInstance}>
            <AuthUserProvider>
                <GlobalStyles />
                <Router />
            </AuthUserProvider>
        </FirebaseContext.Provider>
    </ThemeProvider>
);

export default App;
