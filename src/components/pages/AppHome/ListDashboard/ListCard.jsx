import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Card = styled.article`
    border: ${props => props.theme.baseBorder};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.paddingM};
`;

const ListCard = (props) => {
    return (
        <Card>
            <h1>{props.title}</h1>
        </Card>
    );
}

ListCard.propTypes = {

};

ListCard.defaultProps = {

};

export default ListCard;
