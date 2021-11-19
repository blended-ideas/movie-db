import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies: {},
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        addMovies: (state, { payload }) => {
            state.movies = payload;
        },
    },
});

export const getAllMovies = (state) => state.movies.movies;

console.log('Action List', movieSlice.actions);
export const { addMovies } = movieSlice.actions;
export default movieSlice.reducer;