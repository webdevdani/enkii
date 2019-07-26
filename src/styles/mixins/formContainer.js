import StyledLabel from 'components/common/Input';

const formContainer = (props) => `
    width: 500px;
    max-width: 90%;
    margin: ${props.theme.paddingM} auto;
    padding: ${props.theme.paddingM};

    label {
        margin-bottom: ${props.theme.paddingM};
    }
`;

export default formContainer;
