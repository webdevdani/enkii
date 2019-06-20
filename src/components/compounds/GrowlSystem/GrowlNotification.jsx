import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import AriaModal from 'react-aria-modal';

import Button from 'components/common/Button';
import modalStyles, { modalContentStyles } from 'styles/mixins/modal';
import gappedGroupStyles from 'styles/mixins/gappedGroup';

const Modal = styled.div`
    ${props => modalStyles(props)}
    min-width: 95vw;
    box-shadow: ${props => props.theme.baseBoxShadow};
`;
const ModalContent = styled.div`
    ${props => modalContentStyles(props)}
    ${props => gappedGroupStyles(props)}
    padding: ${props => props.theme.paddingM};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const GrowlNotification = (props) => {
    return (
        <AriaModal
            onExit={props.onRequestClose}
            titleText={props.message}
            underlayStyle={{
                background: 'transparent',
                paddingTop: '2rem'
            }}
        >
            <Modal>
                <ModalContent>
                    <p>{props.message}</p>
                    <div>
                        <Button secondary onClick={props.onRequestClose}>Close</Button>
                    </div>
                </ModalContent>
            </Modal>
        </AriaModal>
    );
}

GrowlNotification.propTypes = {
    message: PropTypes.string.isRequired,
    onRequestClose: PropTypes.func.isRequired,
};

export default GrowlNotification;
