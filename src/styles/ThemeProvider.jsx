import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components/macro';
import theme from 'styles/theme';

const ThemeProvider = ({ children }) => (
    <SCThemeProvider theme={theme}>
        { children }
    </SCThemeProvider>
);

export default ThemeProvider;
