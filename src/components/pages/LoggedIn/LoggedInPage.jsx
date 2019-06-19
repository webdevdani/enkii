import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
    HOME,
    ACCOUNT,
    ADMIN,
    SIGN_UP,
} from 'constants/routes';
import withAuthorization from 'modules/Authorization';

import Home from 'components/compounds/Home';
import Admin from 'components/compounds/Admin';
import Account from 'components/compounds/Account';


const PublicPage = () => (
    <React.Fragment>
        <main>
            <Switch>
                <Route path={HOME} component={Home} />
                <Route path={ACCOUNT} component={Account} />
                <Route path={ADMIN} component={Admin} />
            </Switch>
        </main>
    </React.Fragment>
);

const condition = authUser => !!authUser ? SIGN_UP : null;

export default withAuthorization(condition)(PublicPage);

