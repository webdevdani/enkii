import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { CREATE_LIST } from 'constants/routes';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import Button from 'components/common/Button';
import ListCard from './ListCard';

const ButtonWrapper = styled.div`
    text-align: center;
    margin: 3rem 0;
    padding: 3rem 0 0;
    border-top: ${props => props.theme.baseBorder};
`;

const ListCollectionView = (props) => {
    return (
        <section>
            <Headline style={{ paddingBottom: '1rem' }} size={SIZE_LARGE}>
                Your Lists
            </Headline>
            {props.lists.map(list => (
                <ListCard
                    key={list.id}
                    {...list}
                />
            ))}
            <ButtonWrapper>
                <Link to={CREATE_LIST}>
                    <Button>Create a New List</Button>
                </Link>
            </ButtonWrapper>
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
