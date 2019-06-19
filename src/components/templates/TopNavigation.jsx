import React from 'react';

import Navigation from 'components/compounds/Navigation';

const TopNavigation = ({ children }) => (
    <React.Fragment>
        <Navigation />
        <main>
            {children}
        </main>
    </React.Fragment>
);

export default TopNavigation;

