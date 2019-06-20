import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

import Sidebar from 'components/compounds/Sidebar';


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

const LeftSidebar = ({ children, sidebarContent }) => (
    <Wrapper>
        <Sidebar sidebarContent={sidebarContent}/>
        <MainContentWrapper>
            {children}
        </MainContentWrapper>
    </Wrapper>
);

LeftSidebar.propTypes = {
    children: PropTypes.node.isRequired,
    sidebarContent: PropTypes.element,
};

LeftSidebar.defaultProps = {
    sidebarContent: null,
};

export default LeftSidebar;

