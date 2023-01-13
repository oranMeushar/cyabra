import React, {useState, useEffect} from 'react';
import {Container, MoviesContainer} from './home.style';
import Search from '../../components/search/search';
import MovieCard from '../../components/movieCard/movieCard';
import ReactPaginate from 'react-paginate';
import useFetchMovies from '../../hooks/useFetchMovies';
import LoadingSpinner from '../../components/loader/loader';

const Home = () => {
    
    const [search, setSearch] = useState('');
    const [itemOffset, setItemOffset] = useState(0);
    
    const ITEMS_PER_PAGE = 20;
    const endOffset = itemOffset + ITEMS_PER_PAGE;
 
    const {movies, isLoading} = useFetchMovies('https://cyan-gorgeous-cygnet.cyclic.app/api/all-movies?key=jedimindtrick');
    
    useEffect(() =>{
        search.length && setItemOffset(0);
    },[search])
    
    const filteredMovies = movies.filter(movie =>{
        const {genres, description, imDbRating, title} = movie;
        const lowerCaseSearch = search.toLowerCase();
  
        if ( genres.toLowerCase().includes(lowerCaseSearch)
              || description.toLowerCase().includes(lowerCaseSearch)
              || title.toLowerCase().includes(lowerCaseSearch)
              || imDbRating === search
          ) {
            return movie
        }
      });

    const currentItems = filteredMovies.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(filteredMovies.length / ITEMS_PER_PAGE);

    return (
        <Container>
            <Search search={search} setSearch={setSearch} placeHolder={'Search by title, year, rating or genre'}/>
            {isLoading && <LoadingSpinner topPosition={'10vmin'} color={'#7f36ba'}/>}
            <MoviesContainer>
                {
                    !!currentItems.length && currentItems.map(movie =>{
                        return <MovieCard key={movie.id} {...movie}/>
                    })
                }
            </MoviesContainer>
            <ReactPaginate
                className='pagination'
                pageLinkClassName='page-link'
                previousLinkClassName='prev'
                nextLinkClassName='next'
                nextLabel='>'
                previousLabel='<'
                onPageChange={(e) => setItemOffset(e.selected * ITEMS_PER_PAGE) % movies.length}
                pageRangeDisplayed={7}
                pageCount={pageCount}
                breakLabel='...'
                activeClassName='active'
                renderOnZeroPageCount={null}
                forcePage={!search.length && 0}
            />
        </Container>
    );
};

export default Home;