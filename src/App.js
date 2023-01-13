import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './pages/home/home';
import MovieDetails from './pages/movieDetails/movieDetails';

const App =  () => {
  return (
    <>
    <ToastContainer/>
    <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/movie/:movieId' element={<MovieDetails />} />
    </Routes>
    </>
  );
};

export default App;
