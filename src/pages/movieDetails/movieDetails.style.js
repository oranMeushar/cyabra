import styled from '@emotion/styled';

export const Container = styled.div`
`;
export const Title = styled.div`
    font-size: 4vmin;
    font-weight: 600;

`;
export const Plot = styled.div`
    font-size: 3vmin;
    margin-top: 6vmin;
`;
export const MovieDetailsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    column-gap: 2vmin;
    justify-items: center;
    align-items: center;
`;
export const Image = styled.img`
    width:50vmin;
`;
export const Details = styled.div`
    justify-self: start;
    font-size: 3vmin;
    display: flex;
    flex-direction: column;
    gap:3vmin;

    span{
        font-weight: 600;
    }
`;
