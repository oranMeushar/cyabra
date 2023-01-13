import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Jumbotron from '../../components/jumbotron/Jumbotron';
import { getMovieByIdSelector } from '../../store/selectors/moviesSelector';
import { Container, MovieDetailsContainer, Image, Details, Title, Plot } from './movieDetails.style';

const MovieDetails = () => {

    const params = useParams();
    const movie = useSelector(getMovieByIdSelector(params.movieId));

    return (
        <Container>
            <Jumbotron>
                <Title>{movie?.title}</Title>
                <Plot>{movie?.plot}</Plot>
            </Jumbotron>
            <MovieDetailsContainer>
                <Image src={movie?.image}/>
                <Details>
                    <div><span>Relese Year: </span>{movie?.description.replace(/[()]/g, '')}</div>
                    <div><span>Genres: </span>{movie?.genres}</div>
                    <div><span>Rating: </span>{movie?.imDbRating}</div>
                    <div><span>Duration: </span>{movie?.runtimeStr}</div>
                    <div><span>Stars: </span>{movie?.stars}</div>
                </Details>

            </MovieDetailsContainer>

        </Container>
    );
};

export default MovieDetails;