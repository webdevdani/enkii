import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, NavLink, generatePath } from 'react-router-dom';
import { EDIT_LIST, HOME } from 'constants/routes';

import TopNavigation from 'components/templates/TopNavigation';
import { useFirebase } from 'modules/Firebase';
import { useAuthUser } from 'modules/AuthUser';
import { useGrowlSystem } from 'components/compounds/GrowlSystem';
import FadeIn from 'components/common/FadeIn';
import Button, { SIZE_SMALL } from 'components/common/Button';
import ListArticle from './ListArticle';

// if list doesnt exist,
// Send to home page with growl saying it doesnt exist

const ViewList = (props) => {
    const listId = props.match.params.id;
    const firebase = useFirebase();
    const authUser = useAuthUser();
    const [list, setList] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [userOwnsList, setUserOwnsList] = useState(false);
    const showGrowlMessage = useGrowlSystem();

    const redirectFromList = (msg) => {
        props.history.push(HOME);
        showGrowlMessage(msg || `Whoops, that list doesn't exist.`);
    };

    useEffect(() => {
        firebase.getList(listId)
            .then((list) => {
                if (list.exists) {
                    const listData = list.data();

                    setList(listData);
                    setIsLoading(false);

                    if (authUser.uid === listData.userId) {
                        setUserOwnsList(true);
                    }
                } else {
                    redirectFromList();
                }
            })
            .catch((err) => {
                redirectFromList((err && err.message) || null);
            });
    }, [listId, firebase, authUser]);

    if (isLoading) {
        return null;
    }

    return (
        <TopNavigation
            navigationContent={userOwnsList ?
                (
                    <NavLink to={generatePath(EDIT_LIST, { id: listId })}>
                        <Button size={SIZE_SMALL}>Edit List</Button>
                    </NavLink>
                ) : null
            }
        >
            <FadeIn>
                <ListArticle {...list} />
            </FadeIn>
        </TopNavigation>
    );
}

ViewList.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    }),
    history: PropTypes.shape({
        push: PropTypes.func.isRequired,
    }),

};

ViewList.defaultProps = {

};

export default withRouter(ViewList);
