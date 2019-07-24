import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import visuallyHiddenStyles from 'styles/mixins/visuallyHidden';

const Btn = styled.button`
    border: none;
    background: none;
    color: ${props => props.color || props.theme.iconColor};
`;

const AccessibleLabel = styled.span`
    ${visuallyHiddenStyles()}
`;

const IconButton = ({ children, label, ...btnProps}) => (
    <Btn {...btnProps}>
        <AccessibleLabel>{label}</AccessibleLabel>
        {children}
    </Btn>
);

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
};

IconButton.defaultProps = {
    color: null,
};

export default IconButton;
