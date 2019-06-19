import styled from 'styled-components/macro';

const Button = styled.button`
    font-size: 0.75rem;
    background-color: ${props => props.secondary ? 'transparent' : props.theme.accentColor};
    border: 1px solid ${props => props.theme.accentColor};
    color: ${props => props.secondary ? props.theme.accentColor : props.theme.lightFontColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => `${props.theme.paddingS} ${props.theme.paddingM}`};
    ${props => props.fullWidth ? `width: 100%;` : ''}
`;

export default Button;
