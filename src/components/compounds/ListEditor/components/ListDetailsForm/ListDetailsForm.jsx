import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import UnderlineInput from 'components/common/UnderlineInput';
import RadioGroup from 'components/common/RadioGroup';
import ImageEditor from '../ImageEditor';

import listSchema, {
    listPropType,
    ID,
    USER_ID,
    TITLE,
    IMAGE_URL,
    DESCRIPTION,
    TYPE,
    TYPE_OL,
    TYPE_UL,
} from 'constants/schemas/list';

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
            <ImageEditor
                src={props[IMAGE_URL]}
                onChange={(img) => props.onChange({ [IMAGE_URL]: img })}
                listId={props[ID]}
                userId={props[USER_ID]}
            />
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
    [ID]: PropTypes.string.isRequired,
    [USER_ID]: PropTypes.string.isRequired,
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
