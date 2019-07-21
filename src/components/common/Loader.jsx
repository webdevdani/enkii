import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components/macro';

const ellipsisOne = keyframes`
    from { transform: scale(0); }
    to { transform: scale(1); }
`;

const ellipsisTwo = keyframes`
    from { transform: translate(0, 0); }
    to { transform: translate(19px, 0); }
`;

const ellipsisThree = keyframes`
    from { transform: scale(1); }
    to { transform: scale(0); }
`;

const FullscreenWrapper = styled.div`
    ${props => props.fullscreen ? `
        min-height: 100vh;
        display: flex;
    ` : ''}
`;

const EllipsisLoader = styled.div`
    display: block;
    position: relative;
    width: 64px;
    height: 64px;
    margin: auto;

    > div {
        position: absolute;
        top: 27px;
        width: 11px;
        height: 11px;
        border-radius: 100%;
        background: ${props => props.theme.accentColor};
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    > div:nth-child(1) {
        left: 6px;
        animation: ${ellipsisOne} 0.6s infinite;
    }
    > div:nth-child(2) {
        left: 6px;
        animation: ${ellipsisTwo} 0.6s infinite;
    }
    > div:nth-child(3) {
        left: 26px;
        animation: ${ellipsisTwo} 0.6s infinite;
    }
    > div:nth-child(4) {
        left: 45px;
        animation: ${ellipsisThree} 0.6s infinite;
    }
`;

const Loader = ({ fullscreen }) => (
    <FullscreenWrapper fullscreen={fullscreen}>
        <EllipsisLoader>
            <div />
            <div />
            <div />
            <div />
        </EllipsisLoader>
    </FullscreenWrapper>
);

Loader.propTypes = {
    fullscreen: PropTypes.bool,
};

Loader.defaultProps = {
    fullscreen: false,
};

export default Loader;
