import { useState, useEffect } from 'react';
import * as api from '../utils/api';
import { useDispatch, useSelector } from 'react-redux';
import { setMovies } from '../store/moviesReducer';
import { getMoviesSelector } from '../store/selectors/moviesSelector';
import { toast } from 'react-toastify';

export default (url) => {

    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();
    const movies = useSelector(getMoviesSelector);

    const handleSuccessResponse = (data) =>{
        const {results} = data;
        dispatch(setMovies(results));
        sessionStorage.setItem('movies', JSON.stringify(results));
    }

    const handleErrorResponse = () =>{
        toast.error('An error occurred while fetching data')
    }

    useEffect(() =>{
        const fetchData = async() => {
            setIsLoading(true);
            const [result, data] = await api.get(url);
            setIsLoading(false);

            result.ok ? handleSuccessResponse(data) : handleErrorResponse()
        }
        fetchData();
    },[])

    return {movies, isLoading}
}