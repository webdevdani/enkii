import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import Landing from 'components/compounds/Landing';
import SignUp from 'components/compounds/SignUp';
import SignIn from 'components/compounds/SignIn';
import PasswordForget from 'components/compounds/PasswordForget';
import Home from 'components/compounds/Home';
import Account from 'components/compounds/Account';
import Admin from 'components/compounds/Admin';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route path={ROUTES.HOME} component={Home} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.ADMIN} component={Admin} />
        </Switch>
    </BrowserRouter>
);

export default Router;
