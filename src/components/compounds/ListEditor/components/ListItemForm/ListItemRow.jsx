import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import * as KeyCode from 'keycode-js';

import baseInputStyles from 'styles/mixins/baseInputStyles';
import headlineStyles from 'styles/mixins/headlineStyles';

const getItemInputId = (order) => `list_item_${order}`;

const focusListItemTitleInput = (order) => {
    const input = document.getElementById(getItemInputId(order));
    input && input.focus();
};

const RowContainer = styled.article`
    border-bottom: ${props => props.theme.baseBorder};
    padding: ${props => props.theme.paddingS};
`;
const ListItemLabel = styled.label`
    display: flex;
`;
const ListItemLabelText = styled.span`
    ${props => headlineStyles(props)}
    margin-bottom: 0;
    margin-top: ${props => props.theme.paddingXs};
    margin-right: ${props => props.theme.paddingXs};
`;
const ListItemInput = styled.input`
    ${props => baseInputStyles(props)}
    border: none;
`;

const ListItemRow = (props) => {
    const handleTitleChange = (e) => {
        props.onChange(props.order, { title: e.target.value.trim() });
    };

    const handleKeyDown = (e) => {
        const { keyCode } = e;

        if (keyCode === KeyCode.KEY_ENTER || keyCode === KeyCode.KEY_RETURN) {
            const newListItemOrder = props.order + 1;
            props.addNewListItem(newListItemOrder);
            focusListItemTitleInput(newListItemOrder);

            e.preventDefault();
            e.stopPropagation();
        } else if (keyCode === KeyCode.KEY_UP) {
            // if at the first index of the input,
            // focus the previous ListItemInput, IF IT EXISTS
            if (e.target.selectionStart === 0) {
                focusListItemTitleInput(props.order - 1);
            }
        } else if (keyCode === KeyCode.KEY_DOWN) {
            // if at the last index of the input,
            // focus the next ListItemInput, IF IT EXISTS
            if (e.target.selectionStart === e.target.value.length) {
                focusListItemTitleInput(props.order + 1);
            }
        } else if (keyCode === KeyCode.KEY_DELETE || keyCode === KeyCode.KEY_BACK_SPACE) {
            // If all the text is deleted, remove the list item (unless it's the first)
            if (e.target.value.length === 0 && props.order !== 1) {
                props.removeListItem(props.order);
                focusListItemTitleInput(props.order - 1);
            }
        };
    };

    return (
        <RowContainer>
            <ListItemLabel>
                <ListItemLabelText>{props.label}.</ListItemLabelText>
                <ListItemInput
                    id={getItemInputId(props.order)}
                    value={props.title}
                    onChange={handleTitleChange}
                    placeholder="List Item Title"
                    onKeyDown={handleKeyDown}
                />
            </ListItemLabel>
        </RowContainer>
    );
}

ListItemRow.propTypes = {
    order: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addNewListItem: PropTypes.func.isRequired,
    removeListItem: PropTypes.func.isRequired,
};

export default ListItemRow;
