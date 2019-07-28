import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import Landing from 'components/pages/Landing';
import SignUp from 'components/pages/SignUp';
import SignIn from 'components/pages/SignIn';
import SignOut from 'components/pages/SignOut';
import PasswordForget from 'components/pages/PasswordForget';
import Dashboard from 'components/pages/Dashboard';
import EditList from 'components/pages/EditList';
import Account from 'components/pages/Account';
import PasswordChange from 'components/pages/PasswordChange';
import Admin from 'components/pages/Admin';
import PageNotFound from 'components/pages/PageNotFound';
import ViewList from 'components/pages/ViewList';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.HOME} component={Landing} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_OUT} component={SignOut} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route exact path={ROUTES.DASHBOARD} component={Dashboard} />
            <Route path={[ROUTES.EDIT_LIST, ROUTES.CREATE_LIST]} component={EditList} />
            <Route path={ROUTES.VIEW_LIST} component={ViewList} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChange} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
