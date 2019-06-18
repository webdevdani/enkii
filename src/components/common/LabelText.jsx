import PropTypes from 'prop-types';

import styled from 'styled-components/macro';

const LabelText = styled.p`
    margin-bottom: 0.5em;
    font-weight: 600;
`;

LabelText.propTypes = {
    children: PropTypes.node.isRequired,
};

export default LabelText;
