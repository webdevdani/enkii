import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const LabelText = styled.span`
    margin-bottom: 0.5em;
    display: block;
    font-weight: 600;
`;

LabelText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Input;
