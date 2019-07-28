import React from 'react';
import { Link } from 'react-router-dom';

import { DASHBOARD } from 'constants/routes';
import IconButton from 'components/common/IconButton';
import HomeIcon from 'assets/icons/Home';

const BTN_LABEL = 'Go back to your dashboard';

const HomeButton = () => (
    <Link to={DASHBOARD}>
        <IconButton label={BTN_LABEL}>
            <HomeIcon title={BTN_LABEL} />
        </IconButton>
    </Link>
);

export default HomeButton;
