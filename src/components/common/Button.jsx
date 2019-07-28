import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

export const SIZE_SMALL = 'small';

const Button = styled.button`
    font-size: ${props => props.size === SIZE_SMALL ? '0.55rem' : '0.75rem'};
    font-weight: 600;
    background-color: ${props => props.secondary ? 'transparent' : props.theme.accentColor};
    border: 2px solid ${props => props.theme.accentColor};
    color: ${props => props.theme.fontColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => `${props.theme.paddingS} ${props.theme.paddingM}`};
    ${props => props.fullWidth ? `width: 100%;` : ''}
    line-height: 1;
    opacity: ${props => props.disabled ? '0.6': '1'};
    transition: opacity 0.3s ease-in-out, border 0.3s ease-in-out, background 0.3s ease-in-out;

    &:hover {
        border-color: ${props => props.theme.darkerAccentColor};

        ${props => !props.secondary &&
            `background-color: ${props.theme.darkerAccentColor};`
        }
    }
`;

Button.propTypes = {
    size: PropTypes.oneOf([
        SIZE_SMALL,
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
