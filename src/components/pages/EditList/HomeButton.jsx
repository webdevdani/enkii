import React from 'react';
import { Link } from 'react-router-dom';

import { APP } from 'constants/routes';
import IconButton from 'components/common/IconButton';
import HomeIcon from 'styles/icons/Home';

const HomeButton = (props) => {
    return (
        <Link to={APP}>
            <IconButton>
                <HomeIcon />
            </IconButton>
        </Link>
    );
}

export default HomeButton;
