import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as ROUTES from 'constants/routes';

import Landing from 'components/pages/Landing';
import SignUp from 'components/pages/SignUp';
import SignIn from 'components/pages/SignIn';
import SignOut from 'components/pages/SignOut';
import PasswordForget from 'components/pages/PasswordForget';
import AppHome from 'components/pages/AppHome';
import EditList from 'components/pages/EditList';
import Account from 'components/pages/Account';
import PasswordChange from 'components/pages/PasswordChange';
import Admin from 'components/pages/Admin';
import PageNotFound from 'components/pages/PageNotFound';

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={ROUTES.LANDING} component={Landing} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.SIGN_OUT} component={SignOut} />
            <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
            <Route exact path={ROUTES.APP} component={AppHome} />
            <Route path={[ROUTES.EDIT_LIST, ROUTES.CREATE_LIST]} component={EditList} />
            <Route path={ROUTES.ACCOUNT} component={Account} />
            <Route path={ROUTES.PASSWORD_CHANGE} component={PasswordChange} />
            <Route path={ROUTES.ADMIN} component={Admin} />
            <Route path={ROUTES.PAGE_NOT_FOUND} component={PageNotFound} />
            <Route component={PageNotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;
