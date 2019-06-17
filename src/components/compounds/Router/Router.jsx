import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import Home from 'components/compounds/Home';
import Account from 'components/compounds/Account';
import Admin from 'components/compounds/Admin';

import PublicPage from 'components/pages/Public';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route
                component={PublicPage}
                path={[
                    ROUTES.LANDING,
                    ROUTES.SIGN_UP,
                    ROUTES.SIGN_IN,
                    ROUTES.PASSWORD_FORGET
                ]}
            />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />
        </Switch>
    </BrowserRouter>
);

// Thinking of pages as 'templates.' Like auth pages would have the top bar nav,
// while account pages might have a collapsible sidebar with your personal info

// Auth:
//  sign up
//  sign in
//  password forget
//  landing [not logged in]
//
// Account
//  account
//  password reset
//  home (showing your lists)
//
//  <Route path={[ROUTES.SIGN_UP, ROUTES.SIGN_IN]} component={AuthPage} />

export default Router;
