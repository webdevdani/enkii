import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ThemeProvider from 'styles/ThemeProvider';

const App = (props) => (
    <Router>
        <ThemeProvider>
            <h1>Apppp</h1>
        </ThemeProvider>
    </Router>
);

export default App;
