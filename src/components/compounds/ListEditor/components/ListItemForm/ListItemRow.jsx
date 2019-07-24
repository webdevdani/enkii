import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import * as KeyCode from 'keycode-js';
import TextareaAutosize from 'react-autosize-textarea';

import getListItemByOrder from '../../module/utils/getListItemByOrder';
import { listPropType, TYPE, TYPE_OL } from 'constants/schemas/list';
import baseInputStyles from 'styles/mixins/baseInputStyles';
import headlineStyles from 'styles/mixins/headlineStyles';

const getItemInputId = (id) => `list_item_${id}`;

const focusListItemTitleInputByOrder = (order) => {
    const listItem = getListItemByOrder(order);
    const input = document.getElementById(getItemInputId(listItem && listItem.id));
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
    ${props => headlineStyles({ size: 'small' })}
    margin-bottom: 0;
    margin-top: 0.66rem;
    margin-right: ${props => props.theme.paddingXs};
`;
const ListItemInput = styled(TextareaAutosize)`
    ${props => baseInputStyles(props)}
    border: none;
    resize: none;
`;

const ListItemRow = (props) => {
    const handleTitleChange = (e) => {
        props.onChange(props.id, { title: e.target.value });
    };

    const handleKeyDown = (e) => {
        const { keyCode } = e;

        if (keyCode === KeyCode.KEY_ENTER || keyCode === KeyCode.KEY_RETURN) {
            const newListItemOrder = props.order + 1;
            props.addNewListItem(newListItemOrder); // does this need to be a promise for focus to work?
            focusListItemTitleInputByOrder(newListItemOrder);

            e.preventDefault();
            e.stopPropagation();
        } else if (keyCode === KeyCode.KEY_UP) {
            // if at the first index of the input,
            // focus the previous ListItemInput, IF IT EXISTS
            if (e.target.selectionStart === 0) {
                focusListItemTitleInputByOrder(props.order - 1);
            }
        } else if (keyCode === KeyCode.KEY_DOWN) {
            // if at the last index of the input,
            // focus the next ListItemInput, IF IT EXISTS
            if (e.target.selectionStart === e.target.value.length) {
                focusListItemTitleInputByOrder(props.order + 1);
            }
        } else if (keyCode === KeyCode.KEY_DELETE || keyCode === KeyCode.KEY_BACK_SPACE) {
            // If all the text is deleted, remove the list item (unless it's the first)
            if (e.target.value.length === 0 && props.order !== 1) {
                props.removeListItem(props.id);
                focusListItemTitleInputByOrder(props.order - 1);
            }
        };
    };

    return (
        <RowContainer>
            <ListItemLabel>
                <ListItemLabelText>
                    {props.listType === TYPE_OL ? `${props.order}.` : '•'}
                </ListItemLabelText>
                <ListItemInput
                    id={getItemInputId(props.id)}
                    value={props.title}
                    onChange={handleTitleChange}
                    placeholder="List Item Title"
                    onKeyDown={handleKeyDown}
                    onFocus={() => props.selectListItem()}
                    autoComplete="off"
                />
            </ListItemLabel>
        </RowContainer>
    );
}

ListItemRow.propTypes = {
    order: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    addNewListItem: PropTypes.func.isRequired,
    removeListItem: PropTypes.func.isRequired,
    selectListItem: PropTypes.func.isRequired,
    listType: listPropType[TYPE],
};

export default ListItemRow;
