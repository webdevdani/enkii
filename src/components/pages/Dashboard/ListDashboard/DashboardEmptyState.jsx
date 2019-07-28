import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { CREATE_LIST } from 'constants/routes';
import Button from 'components/common/Button';
import AddNotesIllustration from 'assets/illustrations/AddNotes';
import Headline, { SIZE_MEDIUM } from 'components/common/Headline';

const EmptyStateContainer = styled.div`
    min-height: calc(100vh - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
`;

const IllustrationContainer = styled.div`
    margin: 2rem;
`;

const DashboardEmptyState = (props) => {
    return (
        <EmptyStateContainer>
            <Headline>You don't have any lists!</Headline>
            <IllustrationContainer>
                <AddNotesIllustration />
            </IllustrationContainer>
            <p style={{marginBottom: '0.75rem'}}>Get started by creating one</p>
            <Link to={CREATE_LIST}>
                <Button>Create a List</Button>
            </Link>
        </EmptyStateContainer>
    );
}

export default DashboardEmptyState;
