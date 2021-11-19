import React from 'react'

function MovieCard({Poster: poster, Title: title, Year: year}) {
    return (
        <div className="bg-secondary text-secodary-text rounded flex flex-col">
            <img src={poster} alt={title} className="w-full h-auto object-cover object-top"  style={{maxHeight: '300px'}}/>

            <div className="py-2 px-4 flex-1 flex flex-col justify-between">
                <h4>{title}</h4>
                <p>{year}</p>
            </div>
        </div>
    )
}

export default MovieCard;
