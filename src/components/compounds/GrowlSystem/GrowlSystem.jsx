import React, { useState } from 'react';
import PropTypes from 'prop-types';

import GrowlSystemContext from './context';
import GrowlNotification from './GrowlNotification';

const GrowlSystem = (props) => {
    const [message, setMessage] = useState(null);
    const removeMessage = () => setMessage(null);

    return (
        <GrowlSystemContext.Provider value={setMessage}>
            {props.children}
            <div>
                {message &&
                    <GrowlNotification
                        message={message}
                        onRequestClose={removeMessage}
                    />
                }
            </div>
        </GrowlSystemContext.Provider>
    );
}

GrowlSystem.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GrowlSystem;
