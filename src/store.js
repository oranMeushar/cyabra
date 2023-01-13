import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from './store/moviesReducer';


export const store = configureStore({
  reducer: {
    movies:moviesReducer
  },
})