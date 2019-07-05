import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import inputContainerStyles from 'styles/mixins/inputContainer';
import errorMessageStyles from 'styles/mixins/errorMessage';
import visuallyHiddenStyles from 'styles/mixins/visuallyHidden';

import LabelText from 'components/common/LabelText';

const StyledInput = styled.input`
    padding: ${props => props.theme.paddingS};
    border-radius: ${props => props.theme.borderRadius};
    border: ${props => props.theme.baseBorder};
    font-size: 1rem;
    width: 100%;
`;

export const StyledLabel = styled.label`
    ${props => inputContainerStyles(props)}
    ${props => props.hidden ? visuallyHiddenStyles(props) : ''}
`;

const ErrorMessage = styled.p`
    ${props => errorMessageStyles(props)}
`;

const Input = ({ label, error, ...inputProps }) => (
    <StyledLabel hidden={inputProps.hidden}>
        <div>
            <LabelText>{label}</LabelText>
            {error &&
                <ErrorMessage>{error}</ErrorMessage>
            }
        </div>
        <StyledInput {...inputProps} />
    </StyledLabel>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
    error: PropTypes.string,
    hidden: PropTypes.bool,
};

Input.defaultProps = {
    error: null,
    hidden: false,
};

export default Input;

