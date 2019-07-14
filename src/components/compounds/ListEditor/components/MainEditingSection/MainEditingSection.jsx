import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useListEditor from '../../context/useListEditor';
import {
    updateList,
    updateListItem,
    deleteListItem,
} from '../../module/listActions';
import getListItemByOrder from '../../module/utils/getListItemByOrder';
import ListDetailsForm from '../ListDetailsForm';
import ListItemDetailsForm from '../ListItemDetailsForm';

const Section = styled.section`
    padding: 1rem;
    flex-grow: 1;
    border-left: ${props => props.theme.baseBorder};
`;

const MainEditingSection = ({ activeListItem }) => {
    const { list, dispatch } = useListEditor();
    const { listItems } = list;
    const [activeItemInfo, setActiveItemInfo] = useState(null);

    useEffect(() => {
        if (activeListItem) {
            setActiveItemInfo(getListItemByOrder(activeListItem));
        } else {
            setActiveItemInfo(null);
        }
    }, [activeListItem]);

    return (
        <Section>
            {activeItemInfo ? (
                    <ListItemDetailsForm
                        {...activeItemInfo}
                        onChange={(info) => updateListItem(dispatch, activeItemInfo.order, info)}
                    />
                ) : (
                    <ListDetailsForm
                        {...list}
                        onChange={(info) => updateList(dispatch, info)}
                    />
                )
            }
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
