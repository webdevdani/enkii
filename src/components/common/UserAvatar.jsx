import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components/macro';

import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';

const ImageWrapper = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${props => props.theme.accentColor};
    border-radius: 100%;
    border: ${props => props.theme.baseBorder};
    overflow: hidden;
`;

const UserAvatar = ({ photoUrl }) => {
    return (
        <ImageWrapper>
            {photoUrl &&
                <Image publicId={getPublicIdFromCloudinaryUrl(photoUrl)}>
                    <Transformation width="100" height="100" gravity="face" crop="thumb" />
                </Image>
            }
        </ImageWrapper>
    );
}

UserAvatar.propTypes = {
    photoUrl: PropTypes.string,
};

UserAvatar.defaultProps = {
    photoUrl: null,
};

export default UserAvatar;
