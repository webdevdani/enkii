import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import inputContainerStyles from 'styles/mixins/inputContainer';

import LabelText from 'components/LabelText';

const StyledInput = styled.input`
    padding: ${props => props.theme.paddingS};
    border-radius: ${props => props.theme.borderRadius};
    border: ${props => props.theme.baseBorder};
    font-size: 1rem;
    width: 100%;
`;

const StyledLabel = styled.label`
    ${props => inputContainerStyles(props)}
`;

const Input = ({ label, ...inputProps }) => (
    <StyledLabel>
        <LabelText>{label}</LabelText>
        <StyledInput {...inputProps} />
    </StyledLabel>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;

