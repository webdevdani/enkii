import React from 'react';
import PropTypes from 'prop-types';

import ListCard from './ListCard';

const ListCollectionView = (props) => {
    return (
        <div>
            {props.lists.map(list => (
                <ListCard
                    key={list.id}
                    {...list}
                />
            ))}
        </div>
    );
}

ListCollectionView.propTypes = {
    lists: PropTypes.arrayOf(PropTypes.object),
};

ListCollectionView.defaultProps = {
    lists: [],
};

export default ListCollectionView;
