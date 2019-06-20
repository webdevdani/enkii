export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';

// If this isn't reused, move it into the Headline component

const headlineStyles = (props) => {
    if (props.size === SMALL) {
        return `
            font-size: 1rem;
            font-weight: 600;
            margin-bottom: 1em;
        `;
    } else if (props.size === LARGE) {
        return `
            font-size: 2rem;
            margin-bottom: 0.5em;
        `;
    } else {
        return `
            font-size: 1.5rem;
            margin-bottom: 1em;
        `;
    }
};

export default headlineStyles;
