import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link, generatePath } from 'react-router-dom';

import { EDIT_LIST } from 'constants/routes';
import Headline, { SIZE_SMALL } from 'components/common/Headline';
import Button from 'components/common/Button';

const Card = styled.article`
    border: ${props => props.theme.baseBorder};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.paddingM};
    min-height: 150px;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const EditLink = styled(Link)`
    margin-top: auto;
    align-self: flex-end;
`;

const ListCard = (props) => {
    return (
        <Card>
            <Headline size={SIZE_SMALL} noMargin>{props.title}</Headline>
            <EditLink to={generatePath(EDIT_LIST, { id: props.id })}>
                <Button secondary>Edit List</Button>
            </EditLink>
        </Card>
    );
}

ListCard.propTypes = {

};

ListCard.defaultProps = {

};

export default ListCard;
