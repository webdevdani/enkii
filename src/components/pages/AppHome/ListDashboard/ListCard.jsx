import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link, generatePath } from 'react-router-dom';
import { Image, Transformation } from 'cloudinary-react';

import trimStringToLastWord from 'utils/trimStringToLastWord';
import shortFormatDate from 'utils/shortFormatDate';
import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';
import gappedGroupStyles from 'styles/mixins/gappedGroup';
import { EDIT_LIST, VIEW_LIST } from 'constants/routes';

import Headline, { SIZE_SMALL } from 'components/common/Headline';
import Button from 'components/common/Button';

const IMG_HEIGHT = 200;

const Card = styled.article`
    border: ${props => props.theme.baseBorder};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => props.theme.paddingM};
    min-height: 150px;
    display: flex;
    flex-direction: column;
    margin: 1rem 0;
`;

const ButtonGroup = styled.div`
    margin-top: auto;
    align-self: flex-end;
    ${props => gappedGroupStyles(props)}
`;

const ListImage = styled(Image)`
    width: 100%;
    height: auto;
    margin: 1rem 0;
    border: ${props => props.theme.baseBorder};
    border-radius: ${props => props.theme.borderRadius};
    height: ${IMG_HEIGHT}px;
`;

const DescriptionText = styled.p`
    margin: 0.75rem 0;
`;

const SubHeadline = styled.p`
    font-size: 0.6rem;
    color: ${props => props.theme.subTextColor};
    margin-top: 0.25rem;
`;

const ListCard = (props) => {
    const [shortDate] = useState(
        shortFormatDate(props.createdAt.toDate())
    );
    const [trimmedDesc] = useState(
        props.description ?
            trimStringToLastWord(props.description, 115).concat('...') :
            null
    );

    return (
        <Card>
            <Headline size={SIZE_SMALL} noMargin>{props.title}</Headline>
            <SubHeadline>{shortDate}</SubHeadline>
            {props.imageUrl &&
                <ListImage publicId={getPublicIdFromCloudinaryUrl(props.imageUrl)}>
                    <Transformation width="600" height={IMG_HEIGHT} crop="fill" />
                </ListImage>
            }
            {(!props.imageUrl && !!trimmedDesc) &&
                <DescriptionText>{trimmedDesc}</DescriptionText>
            }
            <ButtonGroup>
                <Link to={generatePath(VIEW_LIST, { id: props.id })}>
                    <Button size="small" secondary>View List</Button>
                </Link>
                <Link to={generatePath(EDIT_LIST, { id: props.id })}>
                    <Button size="small">Edit List</Button>
                </Link>
            </ButtonGroup>
        </Card>
    );
}

ListCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.shape({
        toDate: PropTypes.func.isRequired,
    }).isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
};

ListCard.defaultProps = {

};

export default ListCard;
