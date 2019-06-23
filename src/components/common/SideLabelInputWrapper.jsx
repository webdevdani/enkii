import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import visuallyHiddenStyles from 'styles/mixins/visuallyHidden';

const Label = styled.label`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;

    &:focus-within span {
        color: ${props => props.theme.darkBorderColor};
    }
`;

const LabelText = styled.span`
    min-width: 4rem;
    font-size: 0.75rem;
    padding-top: ${props => props.theme.paddingS};
    margin-right: 0.75rem;
    color: #cfcfcf;
    line-height: 1rem;
    transition: color ${props => props.theme.shortTransitionDuration};

    ${props => props.hideLabel ? visuallyHiddenStyles(props) : ''}
`;

const SideLabelInputWrapper = ({ label, children, hideLabel }) => {
    return (
        <Label>
            <LabelText hideLabel={hideLabel}>{ label }</LabelText>
            { children }
        </Label>
    );
}

SideLabelInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
};

SideLabelInputWrapper.defaultProps = {
    hideLabel: false,
};

export default SideLabelInputWrapper;
