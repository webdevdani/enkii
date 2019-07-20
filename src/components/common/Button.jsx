import styled from 'styled-components/macro';

const Button = styled.button`
    font-size: 0.75rem;
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

export default Button;
