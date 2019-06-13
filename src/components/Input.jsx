import React from 'react';
import PropTypes from 'prop-types';

// import styled from 'styled-components/macro';

import LabelText from 'components/LabelText';

const Input = ({ label, ...inputProps }) => (
    <label>
        <LabelText>{label}</LabelText>
        <input {...inputProps} />
    </label>
);

Input.propTypes = {
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
};

export default Input;
