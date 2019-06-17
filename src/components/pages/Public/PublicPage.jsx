import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    LANDING,
    SIGN_UP,
    SIGN_IN,
    PASSWORD_FORGET,
} from 'constants/routes';

import Navigation from 'components/compounds/Navigation';

import Landing from 'components/compounds/Landing';
import SignUp from 'components/compounds/SignUp';
import SignIn from 'components/compounds/SignIn';
import PasswordForget from 'components/compounds/PasswordForget';


const PublicPage = () => (
    <React.Fragment>
        <Navigation />
        <main>
            <Switch>
                <Route exact path={LANDING} component={Landing} />
                <Route path={SIGN_IN} component={SignIn} />
                <Route path={SIGN_UP} component={SignUp} />
                <Route path={PASSWORD_FORGET} component={PasswordForget} />
            </Switch>
        </main>
    </React.Fragment>
);

export default PublicPage;

