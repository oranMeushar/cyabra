import styled from '@emotion/styled';

export const Container = styled.div`
    letter-spacing: 0.4vmin;
    color: #fff;
    background: linear-gradient(-45deg, #277280, #1e5f74, #52597e, #1875b3);
    background-size: 400% 400%;
    animation: Gradient 15s ease infinite;
    padding: 2vmin;
    
    @keyframes Gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }
`;


