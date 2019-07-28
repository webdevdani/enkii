import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

import { HOME, DASHBOARD } from 'constants/routes';
import { useAuthUser } from 'modules/AuthUser';

const PageCenter = styled.main`
    min-height: 100vh;
    width: 100%;
    display: flex;
    text-align: center;
    align-items: center;

    > div {
        width: 100%;
    }
`;

const FourOhFour = styled.h1`
    font-size: 35vw;
    margin-bottom: 2rem;
    color: ${props => props.theme.accentColor};
    text-shadow: 3px 2px 2px rgba(251, 12, 12,1), 0px -1px 3px rgba(12, 79, 251,.5),-3px 0px 2px rgba(52, 251, 12, 1);
`;

const PageNotFound = (props) => {
    const authUser = useAuthUser();

    return (
        <PageCenter>
            <div>
                <FourOhFour>404</FourOhFour>
                <p>Page not found. <Link to={authUser ? DASHBOARD : HOME}>Go home.</Link></p>
            </div>
        </PageCenter>
    );
}

PageNotFound.propTypes = {
    authUser: PropTypes.object,
};

PageNotFound.defaultProps = {

};

export default PageNotFound;
