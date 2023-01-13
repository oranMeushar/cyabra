import styled from '@emotion/styled';

export const Container = styled.div`
    min-height:100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:5vmin;
    padding: 3vmin 0;

    .pagination{
    display: flex;
    align-items: center;
    font-size: 3vmin;
    list-style-type: none;
    gap:3vmin;

    .page-link{
        border:1px solid black;
        border-radius: 0.6rem;
        width: 5vmin;
        height: 5vmin;
        display: grid;
        place-items: center;
    }

    .active{
        background: lightblue;
        border-radius: 0.6rem;
    }

    .prev,.next,.page-link{
        cursor: pointer;
    }
}
`;

export const MoviesContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, minmax(min-content, 1fr));
    justify-items: center;
    row-gap: 3vmin;

    @media (max-width: 900px) {
        grid-template-columns: repeat(2, minmax(min-content, 1fr));
    }
`;