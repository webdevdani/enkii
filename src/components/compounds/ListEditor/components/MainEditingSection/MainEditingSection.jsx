import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import FadeIn from 'components/common/FadeIn';
import useListEditor from '../../context/useListEditor';
import { updateList, updateListItem } from '../../module/listReducer';
import getListItemById from '../../module/utils/getListItemById';
import ListDetailsForm from '../ListDetailsForm';
import ListItemDetailsForm from '../ListItemDetailsForm';

const Section = styled.section`
    padding: 1rem;
    flex-grow: 1;
    border-left: ${props => props.theme.baseBorder};
`;

const MaxWidth = styled.div`
    max-width: ${props => props.theme.readingWidth};
    margin: auto;
`;

const MainEditingSection = ({ activeListItem }) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;
    const activeListItemInfo = getListItemById(listItems, activeListItem);

    return (
        <Section>
            <MaxWidth>
                {activeListItemInfo ?
                    (
                        <FadeIn key={activeListItemInfo.order}>
                            <ListItemDetailsForm
                                {...activeListItemInfo}
                                listId={list.id}
                                userId={list.userId}
                                onChange={info => updateListItem(
                                    dispatch,
                                    activeListItem,
                                    info,
                                )}
                            />
                        </FadeIn>
                    ) : (
                        <FadeIn key="list">
                            <ListDetailsForm
                                {...list}
                                onChange={(info) => updateList(dispatch, info)}
                            />
                        </FadeIn>
                    )
                }
            </MaxWidth>
        </Section>
    );
}

MainEditingSection.propTypes = {
    activeListItem: PropTypes.string,
};

MainEditingSection.defaultProps = {
    activeListItem: null,
};

export default MainEditingSection;
