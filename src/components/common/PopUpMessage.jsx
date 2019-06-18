import React from 'react';
import PropTypes from 'prop-types';

const PopUpMessage = (props) => {
    return (
        <div>

        </div>
    );
}

PopUpMessage.propTypes = {
    message: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

PopUpMessage.defaultProps = {

};

export default PopUpMessage;
