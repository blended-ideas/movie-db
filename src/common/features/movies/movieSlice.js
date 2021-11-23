import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../../apis/movieAPI";
import { movieAPIKey } from "../../apis/movieAPIKey";
import { produce } from 'immer';

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async (term) => {
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&s=${term}&type=movie`);
    return response.data;
});

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows', async (term) => {
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&s=${term}&type=series`);
    return response.data;
});

export const fetchAsyncMovieOrShowDetail = createAsyncThunk('movies/fetchAsyncMovieOrShowDetail', async (id) => {
    const response = await movieAPI.get(`?apiKey=${movieAPIKey}&i=${id}&plot=full`);
    return response.data;
});


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {}
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedMovieOrShowDetail: (state) => {
            state.selectedMovieOrShow = {};
        } 
    },
    extraReducers: {
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return produce(state, draft => { state.movies = payload });
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return produce(state, draft => { state.shows = payload });
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            return produce(state, draft => { state.selectedMovieOrShow = payload });
        }
    }
});

export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;

export const { removeSelectedMovieOrShowDetail } = movieSlice.actions;
export default movieSlice.reducer;