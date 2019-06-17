const gappedGroup = (props) => `
    & > * {
        margin-right: ${props.theme.paddingM};
    }
    & > *:last-child {
        margin-right: 0;
    }
`;

export default gappedGroup;
