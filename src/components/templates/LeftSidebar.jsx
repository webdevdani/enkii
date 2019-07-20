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
    margin: auto;
    min-height: 100vh;
    ${props => !props.noMaxWidth ? `
        max-width: 30rem;
        padding: ${props.theme.paddingM};
    ` : ``}
`;

const LeftSidebar = ({ children, sidebarContent, noMaxWidth }) => (
    <Wrapper>
        <Sidebar sidebarContent={sidebarContent}/>
        <MainContentWrapper noMaxWidth={noMaxWidth}>
            {children}
        </MainContentWrapper>
    </Wrapper>
);

LeftSidebar.propTypes = {
    children: PropTypes.node.isRequired,
    sidebarContent: PropTypes.element,
    noMaxWidth: PropTypes.bool,
};

LeftSidebar.defaultProps = {
    sidebarContent: null,
    noMaxWidth: false,
};

export default LeftSidebar;

