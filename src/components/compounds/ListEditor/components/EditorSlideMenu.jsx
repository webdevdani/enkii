import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

// slide in on enter

const EditorSlideMenu = (props) => {
    return (
        <aside>
            {props.children}
        </aside>
    );
};

EditorSlideMenu.propTypes = {
    children: PropTypes.node.isRequired,
};

EditorSlideMenu.defaultProps = {

};

export default EditorSlideMenu;
