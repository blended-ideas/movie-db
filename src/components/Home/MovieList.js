import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies } from '../../common/features/movies/movieSlice';
import MovieCard from './MovieCard';

function MovieList() {
    const movies = useSelector(getAllMovies);
    const renderMovies = movies?.Response === 'True' ? (
        movies.Search.map(movie => <MovieCard key={movie.imdbID} {...movie} />)
    ) : (
        <h3>{movies.Error}</h3>
    );

    return (
        <div className="my-5">
            <h2 className="mb-4 font-bold text-secondary-text"> Movies </h2>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)'}}>
                {renderMovies}
            </div>
        </div>
    )
}

export default MovieList;
