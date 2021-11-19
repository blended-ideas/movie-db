import React, { useEffect } from 'react'
import MovieList from './MovieList';
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from '../../common/features/movies/movieSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies());
        dispatch(fetchAsyncShows());
    }, [dispatch]);

    return (
        <>
            <div className="">Banner Div</div>
            <MovieList />
        </>
    )
}

export default Home;
