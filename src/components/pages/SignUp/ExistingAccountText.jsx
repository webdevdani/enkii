import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { SIGN_IN } from 'constants/routes';

const Wrapper = styled.div`
    margin-top: ${props => props.theme.paddingM};
    font-size: 0.75rem;
    text-align: center;
`;

const ExistingAccountText = (props) => (
    <Wrapper>
        <p>Already have an account? <Link to={SIGN_IN}>Sign in.</Link></p>
    </Wrapper>
);

export default ExistingAccountText;
