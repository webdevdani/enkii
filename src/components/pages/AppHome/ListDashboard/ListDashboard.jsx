import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { useFirebase } from 'modules/Firebase';
import { useAuthUser } from 'modules/AuthUser';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import Loader from 'components/common/Loader';

import ListCollectionView from './ListCollectionView';
import DashboardEmptyState from './DashboardEmptyState';


const ListDashboard = (props) => {
    const authUser = useAuthUser();
    const firebase = useFirebase();
    const [page, setPage] = useState(1);
    const [lists, setLists] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    console.log(authUser);

    useEffect(() => {
        firebase.getUsersLists(authUser.uid)
            .then((lists) => {
                const parsedLists = [];
                lists.forEach(list => parsedLists.push(list.data()));
                setLists(parsedLists);
                setIsLoading(false);
            })
            .catch((err) => {
                err && err.message && console.error(err.message);
            })
    }, []);
    // pagination: fetch next page of lists when page changes


    if (isLoading) {
        return <Loader fullscreen />;
    }

    return (
        <React.Fragment>
            {lists.length ?
                (
                    <section>
                        <Headline size={SIZE_LARGE}>Your Lists</Headline>
                        <ListCollectionView lists={lists} />
                    </section>
                ) : (
                    <DashboardEmptyState />
                )
            }
        </React.Fragment>
    );
}

export default ListDashboard;
