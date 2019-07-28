import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Image, Transformation } from 'cloudinary-react';

import getPublicIdFromCloudinaryUrl from 'utils/getPublicIdFromCloudinaryUrl';

const StyledImage = styled(Image)`
    margin-bottom: ${props => props.theme.paddingL};
    border-radius: ${props => props.theme.imageBorderRadius};
    width: 100%;
    height: auto;
`;

const ArticleImage = (props) => {
    return (
        <StyledImage publicId={getPublicIdFromCloudinaryUrl(props.url)} dpr="auto">
            <Transformation width="600" height="400" crop="fill" />
        </StyledImage>
    );
}

ArticleImage.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ArticleImage;
