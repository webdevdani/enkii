import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import Headline from 'components/common/Headline';
import UnderlineInput from 'components/common/UnderlineInput';
import ImageUploadButton from 'components/common/ImageUploadButton';

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
    const [val, setVal] = useState('');
    const [valTwo, setValTwo] = useState('');
    const [valThree, setValThree] = useState('');

    return (
        <FormSection name={`listItem_${props.order}`}>
            <HeaderContainer>
                <Headline as="h2">{`${props.order}.`}</Headline>
            </HeaderContainer>
            <InputContainer>
                <UnderlineInput
                    label="Title"
                    value={valTwo}
                    onChange={(e) => setValTwo(e.target.value)}
                    hideLabel
                    style={{ fontWeight: 'bold' }}
                    placeholder="Title"
                    grow
                />
                <UnderlineInput
                    label="URL"
                    value={valThree}
                    onChange={(e) => setValThree(e.target.value)}
                    placeholder="(Optional)"
                />
                <ImageUploadButton />
                <UnderlineInput
                    label="Description"
                    value={val}
                    onChange={(e) => setVal(e.target.value)}
                    grow
                />
            </InputContainer>
        </FormSection>
    );
}

ListItemForm.propTypes = {
    order: PropTypes.number.isRequired,
};

ListItemForm.defaultProps = {

};

export default ListItemForm;
