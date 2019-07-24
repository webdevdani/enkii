import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

export const SMALL = 'small';

const Button = styled.button`
    font-size: ${props => props.size === SMALL ? '0.55rem' : '0.75rem'};
    font-weight: 600;
    background-color: ${props => props.secondary ? 'transparent' : props.theme.accentColor};
    border: 1px solid ${props => props.theme.accentColor};
    color: ${props => props.secondary ? props.theme.accentColor : props.theme.lightFontColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => `${props.theme.paddingS} ${props.theme.paddingM}`};
    ${props => props.fullWidth ? `width: 100%;` : ''}
    line-height: 1;
    opacity: ${props => props.disabled ? '0.6': '1'};
    transition: opacity 0.3s ease-in-out;
`;

Button.propTypes = {
    size: PropTypes.oneOf([
        SMALL,
    ]),
    secondary: PropTypes.bool,
    fullWidth: PropTypes.bool,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    size: null,
    secondary: false,
    fullWidth: false,
    disabled: false,
};

export default Button;
