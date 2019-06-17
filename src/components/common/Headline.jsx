import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import headlineStyles, {
    SMALL as SIZE_SMALL,
    MEDIUM as SIZE_MEDIUM,
    LARGE as SIZE_LARGE,
} from 'styles/mixins/headlineStyles';

export {
    SIZE_SMALL,
    SIZE_MEDIUM,
    SIZE_LARGE,
};

const Headline = styled.h1`
    ${props => headlineStyles(props)}
`;

// To use other headline levels, use styled-components `as`
// Ex: <Headline as="h4" size={SIZE_SMALL}>Title</Headline>

Headline.propTypes = {
    size: PropTypes.oneOf([
        SIZE_SMALL,
        SIZE_MEDIUM,
        SIZE_LARGE,
    ]),
};

Headline.defaultProps = {
    size: SIZE_MEDIUM,
};

export default Headline;
