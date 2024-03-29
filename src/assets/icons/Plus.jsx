import React from 'react';
import PropTypes from 'prop-types';

const Plus = (props) => (
    <svg width="34px" height="34px" viewBox="0 0 34 34" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <title>{props.title}</title>
        <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Plus_icon" fill="currentColor" fillRule="nonzero">
                <path d="M30.0001429,12.952381 L21.047619,12.952381 L21.047619,3.99985714 C21.047619,1.80038095 19.2002857,0 17,0 C14.7997143,0 12.952381,1.80038095 12.952381,3.99985714 L12.952381,12.952381 L3.99985714,12.952381 C1.80038095,12.952381 0,14.7997143 0,17 C0,19.2002857 1.80038095,21.047619 3.99985714,21.047619 L12.952381,21.047619 L12.952381,30.0001429 C12.952381,32.199619 14.7997143,34 17,34 C19.2002857,34 21.047619,32.199619 21.047619,30.0001429 L21.047619,21.047619 L30.0001429,21.047619 C32.199619,21.047619 34,19.2002857 34,17 C34,14.7997143 32.199619,12.952381 30.0001429,12.952381 Z" id="Path" />
            </g>
        </g>
    </svg>
);

Plus.propTypes = {
    title: PropTypes.string,
};

Plus.defaultProps = {
    title: 'Plus',
};

export default Plus;
