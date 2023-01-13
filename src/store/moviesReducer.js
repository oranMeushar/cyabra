import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  moviesList:[]
}

const moviesSlice = createSlice({
  name: 'moviesReducer', 
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.moviesList = action.payload;
    },

  },
})

export const { 
  setMovies,
} = moviesSlice.actions

export default moviesSlice.reducer