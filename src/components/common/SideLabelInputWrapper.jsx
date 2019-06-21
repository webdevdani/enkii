import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Label = styled.label`
    display: flex;
    flex-direction: row;
    margin-bottom: 1.5rem;
`;

const LabelText = styled.span`
    width: 5rem;
    font-size: 0.75rem;
    text-align: right;
    padding-top: 0.5rem;
    margin-right: 0.5rem;
    color: #cfcfcf;
    line-height: 1rem;
`;

const SideLabelInputWrapper = ({ label, children }) => {
    return (
        <Label>
            <LabelText>{ label }</LabelText>
            { children }
        </Label>
    );
}

SideLabelInputWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
};

SideLabelInputWrapper.defaultProps = {

};

export default SideLabelInputWrapper;
