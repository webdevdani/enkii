import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { PASSWORD_FORGET } from 'constants/routes';

const Wrapper = styled.div`
    margin-top: ${props => props.theme.paddingM};
    font-size: 0.75rem;
    text-align: center;
`;

const ForgottenPasswordText = (props) => (
    <Wrapper>
        <p>Forgot your password? <Link to={PASSWORD_FORGET}>Request to reset it.</Link></p>
    </Wrapper>
);

export default ForgottenPasswordText;
