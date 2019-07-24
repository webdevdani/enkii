import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import SideLabelInputWrapper from './SideLabelInputWrapper';

const RadioOptionGroup = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RadioWrapper = styled.div`
    padding-top: ${props => props.theme.paddingS};
    color: ${props => props.theme.subTextColor};
    font-size: 0.75rem;
    margin-right: ${props => props.theme.paddingM};
`;

const RadioOptionLabel = styled.label`
    padding-left: ${props => props.theme.paddingXs};
`;

const RadioGroup = (props) => (
    <fieldset>
        <SideLabelInputWrapper
            label={props.label}
            labelAs="div"
            labelTextAs="legend"
        >
            <RadioOptionGroup>
                {props.options.map(option => (
                    <RadioWrapper key={option.value}>
                        <input
                            type="radio"
                            onChange={props.onChange}
                            id={option.value}
                            name={option.value}
                            checked={option.value === props.value}
                            {...option}
                        />
                        <RadioOptionLabel htmlFor={option.value}>
                            {option.label}
                        </RadioOptionLabel>
                    </RadioWrapper>
                ))}
            </RadioOptionGroup>
        </SideLabelInputWrapper>
    </fieldset>
);

RadioGroup.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

export default RadioGroup;
