import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import * as list from 'constants/schemas/list';
import Headline, { SIZE_LARGE } from 'components/common/Headline';
import ListItemSection from './ListItemSection';

const Article = styled.article`
    max-width: ${props => props.theme.readingWidth};
    margin: auto;
    padding: ${props => props.theme.paddingM};
`;

const List = styled.ul``;

const ListArticle = (props) => {
    return (
        <Article>
            <Headline size={SIZE_LARGE}>{props.title}</Headline>
            {props.description &&
                <p>{props.description}</p>
            }
            <List as={props[list.TYPE]}>
                {props[list.LIST_ITEMS].map(listItem => (
                    <ListItemSection
                        key={listItem.id}
                        listType={props[list.TYPE]}
                        {...listItem}
                    />
                ))}
            </List>
        </Article>
    );
}

ListArticle.propTypes = {
    [list.TITLE]: list.listPropType[list.TITLE],
    [list.DESCRIPTION]: list.listPropType[list.DESCRIPTION],
    [list.LIST_ITEMS]: list.listPropType[list.LIST_ITEMS],
    [list.TYPE]: list.listPropType[list.TYPE],
};

ListArticle.defaultProps = {

};

export default ListArticle;
