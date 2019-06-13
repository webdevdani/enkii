import React from 'react';

import ThemeProvider from 'styles/ThemeProvider';
import GlobalStyles from 'styles/GlobalStyles';
import Router from 'components/compounds/Router';

const App = (props) => (
    <ThemeProvider>
        <React.Fragment>
            <GlobalStyles />
            <Router />
        </React.Fragment>
    </ThemeProvider>
);

export default App;
