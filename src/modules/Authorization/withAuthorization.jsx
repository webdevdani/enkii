import React from 'react';
import { withRouter } from 'react-router-dom';

import { withFirebase } from 'modules/Firebase';
import { withAuthUser } from 'modules/AuthUser';

const withAuthorization = condition => Component => {
    class WithAuthorization extends React.Component {
        componentDidMount() {
            this.listener = this.props.firebase.auth.onAuthStateChanged(
                authUser => {
                    const route = condition(authUser);

                    if (route) {
                        this.props.history.push(route);
                    }
                },
            );
        }

        componentWillUnmount() {
            this.listener();
        }

        render() {
            return (
                condition(this.props.authUser) ? <Component {...this.props} /> : null
            );
        }
    }

    return withRouter(withFirebase(withAuthUser(WithAuthorization)));
};

export default withAuthorization;
