import React from 'react'
import { Link } from 'react-router-dom';

function MovieCard({Poster: poster, Title: title, Year: year, imdbID}) {
    return (
        <Link to={`/movie/${imdbID}`}>
            <div className="bg-secondary text-secodary-text rounded flex flex-col cursor-pointer">
                <div className="overflow-hidden">
                    <img src={poster} alt={title} className="w-full h-auto object-cover object-top hover:scale-125 transition-all duration-500"  style={{maxHeight: '300px'}}/>
                </div>

                <div className="py-2 px-4 flex-1 flex flex-col justify-between">
                    <h4>{title}</h4>
                    <p>{year}</p>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard;
