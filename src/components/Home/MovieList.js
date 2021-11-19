import React from 'react';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../common/features/movies/movieSlice';
import MovieCard from './MovieCard';

function MovieList() {
    const movies = useSelector(getAllMovies);
    const renderMovies = movies?.Response === 'True' ? (
        movies.Search.map(movie => <MovieCard key={movie.imdbID} {...movie} />)
    ) : (
        <h3>{movies.Error}</h3>
    );

    const shows = useSelector(getAllShows);
    const renderShows = shows?.Response === 'True' ? (
        shows.Search.map(show => <MovieCard key={show.imdbID} {...show} />)
    ) : (
        <h3>{shows.Error}</h3>
    );

    return (
        <div className="my-5">
            <h2 className="mb-4 font-bold text-secondary-text"> Movies </h2>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)'}}>
                {renderMovies}
            </div>

            <h2 className="mt-16 mb-4 font-bold text-secondary-text"> Show List </h2>
            <div className="grid gap-4" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr)'}}>
                {renderShows}
            </div>
        </div>
    )
}

export default MovieList;
