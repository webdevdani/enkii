import styled, { keyframes } from 'styled-components/macro';

const fadeIn = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`;

const FadeIn = styled.div`
    animation: ${fadeIn} 0.25s ease-in;
`;

export default FadeIn;
