import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Headline from 'components/common/Headline';
import UnderlineInput from 'components/common/UnderlineInput';
import ImageUploadButton from 'components/common/ImageUploadButton';
import RadioGroup from 'components/common/RadioGroup';

import listSchema, {
    listPropType,
    TITLE,
    IMAGE_URL,
    DESCRIPTION,
    TYPE,
    TYPE_OL,
    TYPE_UL,
} from '../module/listSchema';

const FormSection = styled.section`
    padding-bottom: ${props => props.theme.paddingL};
    margin-bottom: 1rem;
`;

const ListSettingsFormSection = (props) => {
    return (
        <FormSection name="list">
            <UnderlineInput
                label="Title"
                name={`list ${TITLE}`}
                value={props[TITLE]}
                onChange={(e) => props.onChange({ [TITLE]: e.target.value })}
                style={{ fontWeight: 'bold' }}
                placeholder="List Title"
                hideLabel
                grow
            />
            <ImageUploadButton name="cover image">
                Add Image
            </ImageUploadButton>
            <UnderlineInput
                label="Description"
                name={`list ${DESCRIPTION}`}
                value={props[DESCRIPTION]}
                onChange={(e) => props.onChange({ [DESCRIPTION]: e.target.value })}
                grow
            />
            <RadioGroup
                label="List Type"
                value={props[TYPE]}
                onChange={(e) => props.onChange({ [TYPE]: e.target.value })}
                options={[
                    {
                        value: TYPE_OL,
                        label: 'Ordered (Numbered)',
                    },
                    {
                        value: TYPE_UL,
                        label: 'Unordered (Bulleted)',
                    },
                ]}
            />
        </FormSection>
    );
}

ListSettingsFormSection.propTypes = {
    [TITLE]: listPropType[TITLE],
    [IMAGE_URL]: listPropType[IMAGE_URL],
    [DESCRIPTION]: listPropType[DESCRIPTION],
    [TYPE]: listPropType[TYPE],
    onChange: PropTypes.func.isRequired,
};

ListSettingsFormSection.defaultProps = {
    [TITLE]: listSchema[TITLE],
    [IMAGE_URL]: listSchema[IMAGE_URL],
    [DESCRIPTION]: listSchema[DESCRIPTION],
    [TYPE]: listSchema[TYPE],
};

export default ListSettingsFormSection;
