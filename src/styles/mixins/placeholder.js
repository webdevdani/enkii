const placeholder = (styles) => `
    ::placeholder,
    ::-webkit-input-placeholder {
      ${styles}
    }
    :-ms-input-placeholder {
       ${styles}
    }
`;

export default placeholder;
