import React, { useEffect } from 'react'
import MovieList from './MovieList';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../../common/features/movies/movieSlice';

function Home() {
    const dispatch = useDispatch();
    
    const searchTerm = 'Sabrina';
    useEffect(() => {
        dispatch(fetchAsyncMovies(searchTerm));
        dispatch(fetchAsyncShows(searchTerm));
    }, [dispatch]);

    return (
        <>
            <MovieList />
        </>
    )
}

export default Home;
