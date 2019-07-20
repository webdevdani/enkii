import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

import useListEditor from '../context/useListEditor';
import { updateListTitle } from '../module/listActions';
import UnderlineInput from 'components/common/UnderlineInput';
import Button from 'components/common/Button';

const Header = styled.header`
    display: flex;
    padding: ${props => props.theme.paddingM};
    align-items: center;
    border-bottom: ${props => props.theme.baseBorder};
`;

const TitleWrapper = styled.div`
    flex-grow: 1;
    margin-right: ${props => props.theme.paddingM};
`;

const TitleTopbar = (props) => {
    const { list, dispatch, isDirty } = useListEditor();
    const handleTitleChange = (e) => updateListTitle(dispatch, e.target.value);

    return (
        <Header>
            <TitleWrapper>
                <UnderlineInput
                    label="Title"
                    name={`list title`}
                    value={list.title}
                    onChange={handleTitleChange}
                    onFocus={() => props.setActiveListItem(null)}
                    style={{ fontWeight: 'bold' }}
                    placeholder="List Title"
                    autoComplete="off"
                    hideLabel
                    noMargin
                />
            </TitleWrapper>
            <div>
                <Button disabled={!isDirty} type="submit">Save</Button>
            </div>
        </Header>
    );
}

TitleTopbar.propTypes = {
    setActiveListItem: PropTypes.func.isRequired,
};

export default TitleTopbar;
