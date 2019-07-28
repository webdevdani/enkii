import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CREATE_LIST } from 'constants/routes';
import IconButton from 'components/common/IconButton';
import PlusIcon from 'assets/icons/Plus';

const BTN_LABEL = 'Make a new list';

const NewListSidebarButton = (props) => (
    <div>
        <Link to={CREATE_LIST}>
            <IconButton label={BTN_LABEL}>
                <PlusIcon title={BTN_LABEL} />
            </IconButton>
        </Link>
    </div>
);

export default NewListSidebarButton;
