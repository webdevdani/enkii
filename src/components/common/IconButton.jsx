import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const Btn = styled.button`
    border: none;
    background: none;
    color: ${props => props.theme.iconColor};
`;

const IconButton = ({ children, ...btnProps}) => (
    <Btn {...btnProps}>
        {children}
    </Btn>
);

IconButton.propTypes = {
    children: PropTypes.node.isRequired,
};

export default IconButton;
