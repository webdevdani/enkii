import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import TextareaAutosize from 'react-autosize-textarea';

import underlineInputStyles from 'styles/mixins/underlineInput';
import SideLabelInputWrapper from 'components/common/SideLabelInputWrapper';

const TextArea = styled(TextareaAutosize)`
    ${props => underlineInputStyles(props)}
    resize: none;
    width: 100%;
`;

const SingleLine = styled.input`
    ${props => underlineInputStyles(props)}
    width: 100%;
`;

const UnderlineInput = ({ label, grow, hideLabel, ...inputProps }) => {
    const Input = grow ? TextArea : SingleLine;

    return (
        <SideLabelInputWrapper label={label} hideLabel={hideLabel}>
            <Input {...inputProps} />
        </SideLabelInputWrapper>
    );
};

UnderlineInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    grow: PropTypes.bool,
};

UnderlineInput.defaultProps = {
    grow: false,
};

export default UnderlineInput;
