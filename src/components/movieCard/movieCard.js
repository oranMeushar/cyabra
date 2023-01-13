import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, ImageContainer, Image, Footer, Title } from './movieCard.style';

const MovieCard = ({id, image, description, genres, imDbRating, title}) => {

    const navigate = useNavigate();

    return (
        <Container onClick={()=>navigate(`/movie/${id}`)}>
            <Title>
                {title}
            </Title>
            <ImageContainer>
                <Image src={image}/>
            </ImageContainer>
            <Footer>
                <div><span>Relese: </span>{description.replace(/[()]/g, '')}</div>
                <div><span>Rating: </span>{imDbRating}</div>
                <div>{genres}</div>
            </Footer>

        </Container>
    );
};

export default MovieCard;