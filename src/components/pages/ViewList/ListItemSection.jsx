import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import {
    TITLE,
    URL,
    IMAGE_URL,
    DESCRIPTION,
    ORDER,
    listItemPropType,
} from 'constants/schemas/listItem';
import Headline, { SIZE_MEDIUM } from 'components/common/Headline';
import BodyText from 'components/common/BodyText';
import ArticleImage from './ArticleImage';

const ListItem = styled.li`
    margin: 4rem 0;
    padding: 4rem 0 0;
    border-top: ${props => props.theme.dividerBorder};
`;

const ListItemSection = (props) => {
    const titleHeadline = (
        <Headline as="h2" size={SIZE_MEDIUM}>
            {`${props.isOrderedList ? `${props[ORDER]}.` : ''} ${props[TITLE]}`}
        </Headline>
    );

    return (
        <ListItem>
            {props[URL] ?
                <a href={props[URL]}>{titleHeadline}</a> :
                titleHeadline
            }
            {props[IMAGE_URL] &&
                <ArticleImage url={props[IMAGE_URL]} />
            }
            {props[DESCRIPTION] &&
                <BodyText>{props[DESCRIPTION]}</BodyText>
            }
        </ListItem>
    );
}

ListItemSection.propTypes = {
    [TITLE]: listItemPropType[TITLE],
    [URL]: listItemPropType[URL],
    [DESCRIPTION]: listItemPropType[DESCRIPTION],
    [IMAGE_URL]: listItemPropType[IMAGE_URL],
    isOrderedList: PropTypes.bool.isRequired,
};

ListItemSection.defaultProps = {

};

export default ListItemSection;
