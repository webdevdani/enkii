const baseInputStyles = (props) => `
    padding: ${props.theme.paddingS};
    border-radius: ${props.theme.borderRadius};
    border: 2px solid ${props.theme.borderColor};
    background: ${props.theme.contentBackground};
    font-size: 1rem;
    width: 100%;
`;

export default baseInputStyles;
