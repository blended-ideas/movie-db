import React, { useEffect } from 'react'
import MovieList from './MovieList';
import movieAPI from '../../common/apis/movieAPI';
import { movieAPIKey } from '../../common/apis/movieAPIKey';
import { useDispatch } from "react-redux";
import { addMovies } from '../../common/features/movies/movieSlice';

function Home() {
    const movieText = 'Mission';
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchMovies = async () => {
            const response = await movieAPI
                .get(`?apiKey=${movieAPIKey}&s=${movieText}&type=movie`)
                .then(resp => resp.data)
                .catch(err => console.log(`Err: ${err}`));
            
            dispatch(addMovies(response));
        };
        fetchMovies();
    }, []);

    return (
        <>
            <div className="">Banner Div</div>
            <MovieList />
        </>
    )
}

export default Home;
