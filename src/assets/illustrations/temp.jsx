import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from 'styled-components';

// template for other illos

const AddNotes = (props) => {
    const theme = useContext(ThemeContext);
    const color = props.highlightColor || theme.accentColor;

    return (

    );
}

AddNotes.propTypes = {
    highlightColor: PropTypes.string,
};

AddNotes.defaultProps = {
    highlightColor: null,
};

export default AddNotes;
