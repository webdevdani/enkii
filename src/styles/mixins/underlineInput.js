import placeholder from 'styles/mixins/placeholder';

const underlineInput = props => `
    border: none;
    border-bottom: ${props.theme.baseBorder};
    padding: ${props.theme.paddingS} 0;
    font-size: 1rem;
    outline: none;
    transition: border-color ${props.theme.shortTransitionDuration};
    ${props.noMargin ? '' : `margin-bottom: ${props.theme.paddingM};`}
    background: none;

    ${placeholder(`
        color: ${props.theme.borderColor};
        font-weight: 400;
    `)}

    &:focus {
        border-color: ${props.theme.darkBorderColor};
    }
`;

export default underlineInput;
