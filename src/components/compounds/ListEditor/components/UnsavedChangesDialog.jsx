import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Prompt, withRouter } from 'react-router-dom';

import WarningDialog from 'components/common/WarningDialog';
import Button from 'components/common/Button';

class UnsavedChangesDialog extends Component {
    static propTypes = {
        when: PropTypes.bool.isRequired,
        saveList: PropTypes.func.isRequired,
        history: PropTypes.shape({
            push: PropTypes.func.isRequired,
        }).isRequired,
    };

    state = {
        showDialog: false,
        lastLocation: null,
        confirmedNavigation: false,
    };

    openDialog = location => this.setState({
        showDialog: true,
        lastLocation: location,
    });

    closeDialog = () => this.setState({ showDialog: false });

    handleBlockedNavigation = (nextLocation) => {
        const { confirmedNavigation } = this.state;
        const { when } = this.props;

        if (!confirmedNavigation && when){
            this.openDialog(nextLocation);
            return false;
        }

        return true;
    };

    handleConfirmNavigationClick = () => {
        const { history } = this.props;
        const { lastLocation } = this.state;

        if (lastLocation) {
            this.setState({
                confirmedNavigation: true,
            }, () => {
                this.closeDialog();
                // Navigate to the previously blocked location
                history.push(lastLocation.pathname);
            });
        }
    };

    saveAndNavigate = () => {
        this.props.saveList()
            .then(() => {
                this.handleConfirmNavigationClick();
            });
    };

    render() {
        return (
            <React.Fragment>
                <Prompt
                    when={this.props.when}
                    message={this.handleBlockedNavigation}
                />
                {this.state.showDialog &&
                    <WarningDialog
                        headline="Unsaved Changes"
                        message="You have unsaved changes. Are you sure you want to leave without saving?"
                        onRequestClose={this.closeDialog}
                        actions={
                            <React.Fragment>
                                <Button onClick={this.handleConfirmNavigationClick} secondary>
                                    Leave without Saving
                                </Button>
                                <Button onClick={this.saveAndNavigate}>
                                    Save and Leave
                                </Button>
                            </React.Fragment>
                        }
                    />
                }
            </React.Fragment>
        );
    }
}

export default withRouter(UnsavedChangesDialog);
