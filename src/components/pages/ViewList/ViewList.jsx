import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import TopNavigation from 'components/templates/TopNavigation';
import { useFirebase } from 'modules/Firebase';
import { useAuthUser } from 'modules/AuthUser';
import FadeIn from 'components/common/FadeIn';
import ListArticle from './ListArticle';

// if list doesnt exist,
// Send to home page with growl saying it doesnt exist

const ViewList = (props) => {
    const firebase = useFirebase();
    const authUser = useAuthUser();
    const [list, setList] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        firebase.getList(props.match.params.id)
            .then((list) => {
                if (list.exists) {
                    setList(list.data());
                    setIsLoading(false);
                }
            });
    }, [props.match.params.id]);

    if (isLoading) {
        return null;
    }

    return (
        <TopNavigation>
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
