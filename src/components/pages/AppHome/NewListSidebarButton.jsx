import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CREATE_LIST } from 'constants/routes';
import Button from 'components/common/Button';

const NewListSidebarButton = (props) => (
    <div>
        <Link to={CREATE_LIST}>
            <Button secondary>+</Button>
        </Link>
    </div>
);

NewListSidebarButton.propTypes = {
    onClick: PropTypes.func.isRequired,
};

export default NewListSidebarButton;
