import React from 'react';
import PropTypes from 'prop-types';

import Navigation from 'components/compounds/Navigation';

const TopNavigation = ({ children, navigationContent }) => (
    <React.Fragment>
        <Navigation>
            {navigationContent}
        </Navigation>
        <main>
            {children}
        </main>
    </React.Fragment>
);

TopNavigation.propTypes = {
    children: PropTypes.node.isRequired,
    navigationContent: PropTypes.node,
};

TopNavigation.defaultProps = {
    navigationContent: null,
};

export default TopNavigation;

