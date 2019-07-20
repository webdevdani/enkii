import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import AriaModal from 'react-aria-modal';

import Headline from 'components/common/Headline';
import Button from 'components/common/Button';

import modalStyles, {
    modalHeaderStyles,
    modalContentStyles,
    modalFooterStyles,
} from 'styles/mixins/modal';
import gappedGroupStyles from 'styles/mixins/gappedGroup';


const Modal = styled.div`
    ${props => modalStyles(props)}
    max-width: 500px;
    width: 95%;
    min-width: 0;
    margin: auto;
`;
const ModalHeader = styled.header`
    ${props => modalHeaderStyles(props)}
`;
const ModalContent = styled.div`
    ${props => modalContentStyles(props)}
`;
const ModalFooter = styled.footer`
    ${props => modalFooterStyles(props)}
    ${props => gappedGroupStyles(props)}
`;

const WarningDialog = (props) => (
    <AriaModal
        verticallyCenter={true}
        onExit={props.onRequestClose}
        titleText={props.headline}
        alert
    >
        <Modal>
            <ModalHeader>
                <Headline noMargin>{props.headline}</Headline>
            </ModalHeader>
            <ModalContent>
                <p>{props.message}</p>
            </ModalContent>
            <ModalFooter>
                {props.actions ?
                    props.actions : (
                        <Button onClick={props.onRequestClose}>
                            {props.closeButtonText}
                        </Button>
                    )
                }
            </ModalFooter>
        </Modal>
    </AriaModal>
);

WarningDialog.propTypes = {
    onRequestClose: PropTypes.func.isRequired,
    message: PropTypes.string.isRequired,
    headline: PropTypes.string,
    closeButtonText: PropTypes.string,
    actions: PropTypes.node,
};

WarningDialog.defaultProps = {
    headline: 'Alert!',
    closeButtonText: 'Close Alert',
    actions: null,
};

export default WarningDialog;
