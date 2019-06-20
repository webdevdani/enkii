import React from 'react';
import PropTypes from 'prop-types';
import { Image, Transformation } from 'cloudinary-react';
import styled from 'styled-components/macro';

import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';

export const SIZE_SMALL = 50;
export const SIZE_MEDIUM = 100;

const ImageWrapper = styled.div`
    display: inline-block;
    box-sizing: border-box;
    width: ${props => props.size}px;
    height: ${props => props.size}px;
    background-color: ${props => props.theme.accentColor};
    border-radius: 100%;
    border: ${props => props.theme.baseBorder};
    overflow: hidden;
`;

const UserAvatar = ({ photoUrl, size }) => {
    return (
        <ImageWrapper size={size}>
            {photoUrl &&
                <Image publicId={getPublicIdFromCloudinaryUrl(photoUrl)}>
                    <Transformation width={size} height={size} gravity="face" crop="thumb" />
                </Image>
            }
        </ImageWrapper>
    );
}

UserAvatar.propTypes = {
    photoUrl: PropTypes.string,
    size: PropTypes.number,
};

UserAvatar.defaultProps = {
    photoUrl: null,
    size: SIZE_MEDIUM,
};

export default UserAvatar;
