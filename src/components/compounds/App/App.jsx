import React from 'react';

import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';
import Router from 'components/compounds/Router';
import GrowlSystem from 'components/compounds/GrowlSystem';
import Firebase, { FirebaseContext } from 'modules/Firebase';
import AuthUserProvider from 'modules/AuthUser';
import CloudinaryProvider from 'modules/Cloudinary';

const firebaseInstance = new Firebase();

const App = (props) => (
    <ThemeProvider>
        <FirebaseContext.Provider value={firebaseInstance}>
            <AuthUserProvider>
                <GlobalStyles />
                <CloudinaryProvider>
                    <GrowlSystem>
                        <Router />
                    </GrowlSystem>
                </CloudinaryProvider>
            </AuthUserProvider>
        </FirebaseContext.Provider>
    </ThemeProvider>
);

export default App;
