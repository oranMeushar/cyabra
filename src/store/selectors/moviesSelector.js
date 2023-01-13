import { createSelector } from '@reduxjs/toolkit';

const moviesSelector = state => state.movies;

export const getMoviesSelector = createSelector(
    [moviesSelector], (movies) => {
        return movies.moviesList;
    }
) 

export const getMovieByIdSelector = (id) => createSelector(
    [getMoviesSelector], (moviesList) =>{
        !moviesList.length && (moviesList = JSON.parse(sessionStorage.getItem('movies')));
        return moviesList.find(movie => movie.id === id)
    }
)