import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { SIGN_OUT } from 'constants/routes';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const MainContentWrapper = styled.main`
    width: 100%;
    max-width: 1000px;
    margin: auto;
    padding: ${props => props.theme.paddingM};
    min-height: 100vh;
`;

const LeftSidebar = ({ children }) => (
    <Wrapper>
        <section style={{ width: '4rem', backgroundColor: '#EEE', fontSize: '0.5rem' }}>
            <Link to={SIGN_OUT}>Sign Out</Link>
        </section>
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    </Wrapper>
);

export default LeftSidebar;

