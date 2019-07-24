import React from 'react';
import PropTypes from 'prop-types';

import Headline, { SIZE_MEDIUM } from 'components/common/Headline';

const ListItemSection = (props) => {
    return (
        <li>
            <Headline as="h2" size={SIZE_MEDIUM}>{props.title}</Headline>
            {props.description &&
                <p>{props.description}</p>
            }
        </li>
    );
}

ListItemSection.propTypes = {
    title: PropTypes.string,
};

ListItemSection.defaultProps = {

};

export default ListItemSection;
