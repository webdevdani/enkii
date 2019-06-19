import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import PublicPage from 'components/pages/Public';
import LoggedInPage from 'components/pages/LoggedIn';

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
            <Route
                component={LoggedInPage}
                path={[
                    ROUTES.HOME,
                    ROUTES.ACCOUNT,
                    ROUTES.ADMIN,
                ]}
            />
        </Switch>
    </BrowserRouter>
);

export default Router;
