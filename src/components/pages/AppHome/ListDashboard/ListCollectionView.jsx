import React from 'react';
import PropTypes from 'prop-types';

import Headline, { SIZE_LARGE } from 'components/common/Headline';
import ListCard from './ListCard';

const ListCollectionView = (props) => {
    return (
        <section>
            <Headline size={SIZE_LARGE}>Your Lists</Headline>
            {props.lists.map(list => (
                <ListCard
                    key={list.id}
                    {...list}
                />
            ))}
        </section>
    );
}

ListCollectionView.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.object),
};

ListCollectionView.defaultProps = {
    lists: [],
};

export default ListCollectionView;
