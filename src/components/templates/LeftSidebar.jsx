import React from 'react';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { SIGN_OUT } from 'constants/routes';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100vh;
`;

const LeftSidebar = ({ children }) => (
    <Wrapper>
        <section style={{ width: '4rem', backgroundColor: '#EEE', fontSize: '0.5rem' }}>
            <Link to={SIGN_OUT}>Sign Out</Link>
        </section>
        <main>
            {children}
        </main>
    </Wrapper>
);

export default LeftSidebar;

