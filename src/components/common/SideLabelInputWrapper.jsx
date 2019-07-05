import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import visuallyHiddenStyles from 'styles/mixins/visuallyHidden';

const LabelText = styled.span`
    min-width: 4.5rem;
    font-size: 0.75rem;
    padding-top: ${props => props.theme.paddingS};
    margin-right: 0.75rem;
    color: #cfcfcf;
    line-height: 1rem;
    transition: color ${props => props.theme.shortTransitionDuration};

    ${props => props.hideLabel ? visuallyHiddenStyles(props) : ''}
`;

const Label = styled.label`
    display: flex;
    flex-direction: row;

    &:focus-within ${LabelText} {
        color: ${props => props.theme.darkBorderColor};
    }
`;

const SideLabelInputWrapper = (props) => {
    return (
        <Label as={props.labelAs}>
            <LabelText hideLabel={props.hideLabel} as={props.labelTextAs}>
                {props.label}
            </LabelText>
            { props.children }
        </Label>
    );
}

SideLabelInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    hideLabel: PropTypes.bool,
    // For rendering other HTML elements, like fieldsets & legends
    labelAs: PropTypes.string,
    labelTextAs: PropTypes.string,
};

SideLabelInputWrapper.defaultProps = {
    hideLabel: false,
    labelAs: null,
    labelTextAs: null,
};

export default SideLabelInputWrapper;
