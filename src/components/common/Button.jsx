import styled from 'styled-components/macro';

const Button = styled.button`
    font-size: 1rem;
    background-color: ${props => props.theme.accentColor};
    border: 1px solid ${props => props.theme.accentColor};
    color: ${props => props.theme.lightFontColor};
    border-radius: ${props => props.theme.borderRadius};
    padding: ${props => `${props.theme.paddingS} ${props.theme.paddingM}`};
    ${props => props.fullWidth ? `width: 100%;` : ''}
`;

export default Button;
