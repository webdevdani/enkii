import React from 'react';
import PropTypes from 'prop-types';

import UnderlineInput from 'components/common/UnderlineInput';

const ListItemRow = (props) => {
    return (
        <article>
            <UnderlineInput
                label={props.label}
                value={props.title}
                onChange={props.onChange}
                placeholder="List Item Title"
            />
        </article>
    );
}

ListItemRow.propTypes = {
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

ListItemRow.defaultProps = {

};

export default ListItemRow;
