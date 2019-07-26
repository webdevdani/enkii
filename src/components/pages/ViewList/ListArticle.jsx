import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import {
    TITLE,
    DESCRIPTION,
    IMAGE_URL,
    LIST_ITEMS,
    TYPE,
    TYPE_OL,
    listPropType,
} from 'constants/schemas/list';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import BodyText from 'components/common/BodyText';
import ArticleImage from './ArticleImage';
import ListItemSection from './ListItemSection';

const Article = styled.article`
    max-width: ${props => props.theme.readingWidth};
    padding: ${props => `${props.theme.paddingL} ${props.theme.paddingM}`};
    margin: auto;
`;

const List = styled.ul``;

const ListArticle = (props) => {
    return (
        <Article>
            <Headline size={SIZE_LARGE}>{props[TITLE]}</Headline>
            {props[IMAGE_URL] &&
                <ArticleImage url={props[IMAGE_URL]} />
            }
            {props[DESCRIPTION] &&
                <BodyText>{props[DESCRIPTION]}</BodyText>
            }
            <List as={props[TYPE]}>
                {props[LIST_ITEMS].map(listItem => (
                    <ListItemSection
                        key={listItem.id}
                        isOrderedList={props[TYPE] === TYPE_OL}
                        {...listItem}
                    />
                ))}
            </List>
        </Article>
    );
}

ListArticle.propTypes = {
    [TITLE]: listPropType[TITLE],
    [DESCRIPTION]: listPropType[DESCRIPTION],
    [IMAGE_URL]: listPropType[IMAGE_URL],
    [LIST_ITEMS]: listPropType[LIST_ITEMS],
    [TYPE]: listPropType[TYPE],
};

ListArticle.defaultProps = {

};

export default ListArticle;
