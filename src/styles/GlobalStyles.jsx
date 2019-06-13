import React from 'react';
import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
    html, body {
        height: 100%;
    }

    body {
        margin: 0;
        font-size: ${props => props.theme.rootFontSize};
        color: ${props => props.theme.fontColor};
        font-family: ${props => props.theme.fontFamily};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyles;
