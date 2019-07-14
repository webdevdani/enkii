import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Headline from 'components/common/Headline';
import UnderlineInput from 'components/common/UnderlineInput';
import ImageUploadButton from 'components/common/ImageUploadButton';

import listItemSchema, {
    listItemPropType,
    TITLE,
    URL,
    IMAGE_URL,
    DESCRIPTION,
    ORDER,
} from 'constants/schemas/listItem';

const FormSection = styled.section`
    padding-bottom: ${props => props.theme.paddingL};
    display: flex;
    flex-direction: row;
`;

const HeaderContainer = styled.div`
    min-width: 2.5rem;
    padding-right: ${props => props.theme.paddingM};
    padding-top: ${props => props.theme.paddingS};
`;

const InputContainer = styled.div`
    flex-grow: 1;
`;

const ListItemForm = (props) => {
    const listItemName = `listItem_${props.order}`;
    return (
        <FormSection name={listItemName}>
            <HeaderContainer>
                <Headline as="h2">{`${props[ORDER]}.`}</Headline>
            </HeaderContainer>
            <InputContainer>
                <UnderlineInput
                    label="Title"
                    name={`${listItemName} ${TITLE}`}
                    value={props[TITLE]}
                    onChange={(e) => props.onChange({ [TITLE]: e.target.value })}
                    style={{ fontWeight: 'bold' }}
                    placeholder="Title"
                    hideLabel
                    grow
                />
                <UnderlineInput
                    label="URL"
                    name={`${listItemName} ${URL}`}
                    value={props[URL]}
                    onChange={(e) => props.onChange({ [URL]: e.target.value })}
                    placeholder="(Optional)"
                />
                <ImageUploadButton
                    name={`${listItemName} ${IMAGE_URL}`}
                />
                <UnderlineInput
                    label="Description"
                    name={`${listItemName} ${DESCRIPTION}`}
                    value={props[DESCRIPTION]}
                    onChange={(e) => props.onChange({ [DESCRIPTION]: e.target.value })}
                    grow
                />
            </InputContainer>
        </FormSection>
    );
}

ListItemForm.propTypes = {
    [ORDER]: listItemPropType[ORDER].isRequired,
    [TITLE]: listItemPropType[TITLE],
    [URL]: listItemPropType[URL],
    [IMAGE_URL]: listItemPropType[IMAGE_URL],
    [DESCRIPTION]: listItemPropType[DESCRIPTION],
    onChange: PropTypes.func.isRequired,
};

ListItemForm.defaultProps = {
    [TITLE]: listItemSchema[TITLE],
    [URL]: listItemSchema[URL],
    [IMAGE_URL]: listItemSchema[IMAGE_URL],
    [DESCRIPTION]: listItemSchema[DESCRIPTION],
};

export default ListItemForm;
