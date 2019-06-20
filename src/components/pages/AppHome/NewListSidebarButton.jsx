import React from 'react';
import PropTypes from 'prop-types';

import Button from 'components/common/Button';

const NewListSidebarButton = (props) => (
    <div>
        <Button secondary>+</Button>
    </div>
);

NewListSidebarButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NewListSidebarButton;
