import styled from '@emotion/styled';

export const Container = styled.div`
    width: 80%;
    height: 50vmin;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
    border-radius: 0.6rem;
`;
export const ImageContainer = styled.div`
    overflow: hidden;
    height: 100%;
    `;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s linear;
    :hover{
        transform: scale(1.1);
    }
`;
export const Footer = styled.div`
    font-size: 2.5vmin;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 2vmin;
    padding: 0.5vmin;

    >div:nth-of-type(2){
        justify-self: end;
    }
    >div:nth-of-type(3){
        grid-column: 1 / -1;
        justify-self: center;
    }

    span{
        font-weight: 600;
    }
`;
export const Title = styled.div`
    font-size: 3vmin;
    text-align: center;
    font-weight: 600;
`;
